# Idea
An end-to-end platform where investors can invest using tez in startups and can sign SAFT/SAFEs on the platform itself. This platform keep track of cap-table whenever a round closes and startups can also pay their employees and vendors in tez. One super app to invest, raise funds, maintain cap-table, manage cash-flow and payroll & accounting done on-chain.

### Overview
A full stack web app that combines investing, fund-raising, cap-table maintenance, cash-flow management, and on-chain payroll and accounting. Investors can sign SAFT/SAFEs after both startup and investor agree on the proposal and these documents are securely uploaded on blockchain using IPFS.

### Problems we are Solving
- Transactions based on USD and other currencies being centralised
- Agreements may be changed by a centralised authority for their own financial gain.
- Manipulation of accounts by hackers
- Companies have to maintain different payroll system for employee’s salaries

### Features of IstaFund
- SAFT/SAFEs can be uploaded securely to blockchain with the help of Web3 Storage (IPFS).
- Authentication and Authorization of user (Company/Investor)
- Monitoring transactions on blockchain using Tez.
- Multiple startups listed under various industry categories
- Investors can submit proposals to different startups.
- Businesses can keep their payrolls up to date.

### Tech Architecture 
- Smart-Py (for Smart contract)
- Web3 Storage with IPFS (for Storing contract over blockchain) 
- Tezos wallet (Temple Wallet, Taquito, Beacon-SDK)
- NextJS (for Frontend and Backend Development)
- Tailwind CSS/ Daisy UI (for Styling)
- Supabase (for Database)


## Read-Only Docs (By Developer)

### Roles: 
- Investor
- Company
- Employee


### Company
- Company Name
- Company Logo
- Company Valuation
- Company Found Year
- Team Size
- Location
- Description
- Website, Social links
- Industry/Category
- Cap Table
- Company’s Offer (Equity/Asked Investment/Extra requirements(optional)) -> Funding Type (Seed, Round A, Round B…)
- Wallet Address

### Investor
- Investor Name
- Investor Image
- Designation
- Description
- Age / DOB
- Pocket me kitna paisa hai
- Interested company categories
- Email/Contact No. (Verified)
- Wallet Address

### Pages:
- Landing Page - (Header / Services / Company Listing Carousel)
- Company Listing (Meeting Link/ Calendly)
- Individual Company Page
- Individual Investor Page
- Login/Signup
- Checkout Page (Contract/Deal/Transaction)
  - Agreement/T&C from Company
  - Active Offers (Accept/Reject) - Ek haath de ek haath le (Company has to upload Invoice/equity to smart contract, then if investor transaction is successful, documents are sent to investor)




## Blockchain Stuff

> Smart Contract Data Structure:
- Investment_count (number)
- Investment (hash-map: <key:investment_count> : <value:investment_object>)
- Wallet_address (default - investor)
- Wallet_address (company) - where amount is forwarded
- investor_ID
- company_ID
- transaction_amount
- transaction_hash
- Agreement_file_CID
- Agreement_file_name
- Metadata (object)

> Transaction Workflow:
- Checking Wallet Balance for investor Account (Gas fees inclusive)
- Upload Signed Agreements to Web3.storage (Getting CID, and file_name)
- Transferring TEZ coins to the company address (Getting transaction hash) (Will try to integrate in smart contract itself to make it DeFi)
- Call Smart Contract to store the investment transaction.

## Database Schema Design

> User Schema  
user with email / google login / Phone No. Auth (OTP) (May have to store in database))
- _id
- Email
- Password
- profile_id


> Profile Schema
### Investor: (as an individual / as a company)
- _id
- user_id
- Name
- Logo (img)
- Description
- Location
- Social_Links (website/linkedin/twitter)
- Designation
- Wallet_Address
- Interested_Category (ML/AI)
- Team_Members (only as a company)
- Current_Investment [Array… Comapny_name, Invested_Year, Total Funds, Equity)

### Company:
- _id
- user_id
- Name
- Logo (img)
- Description
- Location
- Social_Links (website/linkedin/twitter)
- Founded_Year
- About_Company
- Team_Size
- Category (Dropdown)
- Total_Raise( tez )
- Want_to_Raise (tez )
- Wallet_Address
- Team_Members [Array… (img, name, company_name, linkedin, twitter)]

> Cap Table Schema
### Conversation Schema
- Investor_id
- Company_id
- Message [...Array, message_id ]
- Amount (tez)
- isActive = bool

> Message Schema
 { title, description, type(optional), role (company/investor)}

> Transaction History (Will get using Taquito)


> Store Legal Documents on Firebase bucket (except signed ones -> IPFS via Web3.storage )


