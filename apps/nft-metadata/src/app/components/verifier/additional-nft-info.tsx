import { account } from "@onflow/fcl"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getAccount, retrieveContractInformation } from "../../../flow/utils"
import { Alert } from "../shared/alert"
import { Spinner } from "../shared/spinner"
import { NFTValidity } from "./nft-validity"
import { SampleNFTPrompt } from "./sample-nft-prompt"

export function AdditionalNftInfo({
}: {
}) {
  const { selectedAddress, selectedContract } = useParams()
  const [account, setAccount] = useState<any>({})
  const [contractInfo, setContractInfo] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string|null>(null)

  useEffect(() => {
    const verifyContract = async () => {
      if (!selectedAddress || !selectedContract) {
        return;
      }
      setLoading(true)
      const accountInfo = await getAccount(selectedAddress)
      setAccount(accountInfo)
      if (!accountInfo) {
        setLoading(false)
        setError("Failed to retrieve account")
        return
      }
      const contracts = accountInfo.contracts as any
      if (!accountInfo || !contracts || !contracts[selectedContract]) {
        setLoading(false)
        setError("The provided contract could not be found")
        return;
      }

      const res = await retrieveContractInformation(
        selectedAddress,
        selectedContract,
        contracts[selectedContract]
      )
      if (res) {
        setLoading(false)
      } else {
        
      }
      setContractInfo(res)
    }

    verifyContract()
  }, [selectedAddress, selectedContract])


  const isContractValid = contractInfo &&
    contractInfo.isNFTContract &&
    contractInfo.nftConformsToMetadata &&
    contractInfo.collectionConformsToMetadata

 return (
    <>
      <div className="text-2xl mb-6">Additional Contract Information</div>
      { loading && <Spinner /> }
      { error && <><Alert status="error" title={error} body="" /><br /></> }
      <NFTValidity selectedContract={selectedContract} contractInfo={contractInfo} />
      {
        isContractValid && selectedContract &&
          <>
            <div>
              We need a bit more information about <b>{selectedContract}</b>
            </div>
            <SampleNFTPrompt
              contractCode={account.contracts[selectedContract]}
              defaultValues={{sampleAddress: "", publicPath: ""}}
              setError={(error: string) => { setError(error) }}
            />
          </>
      }
    </>
  )
}