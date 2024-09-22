import { useState } from "react"
import SalesList from "./SalesList"
import Leads from "./Leads"

const SalesAndLeads = () => {
    const [isLeadsSection, setIsLeadsSection] = useState(false)


    return (
        <>
            {isLeadsSection ? <Leads setIsLeadsSection={setIsLeadsSection} /> : <SalesList  setIsLeadsSection={setIsLeadsSection} />}
        </>
    )
}

export default SalesAndLeads