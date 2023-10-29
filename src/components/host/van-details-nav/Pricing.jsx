import { useOutletContext } from "react-router-dom";
import { PricingText } from "../../../styles/host/van-details-nav/pricing.css";

export default function Pricing() {
    const van = useOutletContext();
   
    return (
        <PricingText><em>${van.price}</em>/day</PricingText>
    )
}