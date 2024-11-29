const rules = [
    {
        id: "valuation-fee-paid",
        name: "Valuation Fee Paid",
        condition: (data) => data.isValuationFeePaid === true,
    },
    {
        id: "uk-resident",
        name: "UK Resident",
        condition: (data) => data.isUkResident === true,
    },
    {
        id: "risk-rating-medium",
        name: "Risk Rating Medium",
        condition: (data) => data.riskRating === "Medium",
    },
    {
        id: "ltv-below-60",
        name: "LTV Below 60%",
        condition: (data) => {
            const ltv = (data.loanRequired / data.purchasePrice) * 100;
            console.log(ltv);
            return ltv < 60;
        },
    },
    
    
    
];




module.exports = rules;
