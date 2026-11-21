import { useState } from "react"

const TransactionForm = () => {


    const typeRules = {
        Expense: { fromLabel: "Paid from", toLabel: "Spent on"},
        Income: { fromLabel: "Source", toLabel: "Received to"},
        "Debt Payment": {fromLabel: "Paid from", toLabel: "Paid to"}
    }

        const types = Object.keys(typeRules)

    const [type, setType] = useState("Expense")


    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const data = Object.fromEntries(formData)
        console.log(data)
    }

    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth()+1).padStart(2,'0')
    const day = String(now.getDate()).padStart(2,'0')


    return (
        <div>
            <h1>auto-deployed from github actions</h1>
        <form onSubmit={handleSubmit}>
            <label>Transaction date:
                <input type="date" name="transaction_date" defaultValue= {`${year}-${month}-${day}`} />
            </label>
            <label>Description:
                <input type="text" name="description" />
            </label>
            <label>Type:
                <select onChange={(e)=>setType(e.target.value)} name="type" value={type}>
                    {types.map(
                        t => <option key={t}>{t}</option>
                    )
                    }
                </select>
            </label>
            <label>{typeRules[type].fromLabel}:
                <input type="text" name="from"/>
            </label>
            <label>{typeRules[type].toLabel}:
                <input type="text" name="to"/>
            </label>
            <label>Amount:
                <input type="number" step="0.01" name="amount" />
            </label>
            <button type="submit">Save</button>

        </form>
        </div>

    )
}

export default TransactionForm