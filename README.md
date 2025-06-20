# spqr
---
A Secure Payment QR Code Generating Prototype

Version: 0.3.1

<div align="center">
<img alt="GitHub Issues or Pull Requests" src="https://img.shields.io/github/issues/AaryanKhClasses/spqr?style=for-the-badge&label=Issues&color=red&link=https%3A%2F%2Fgithub.com%2FAaryanKhClasses%2Fspqr%2Fissues">
<img alt="GitHub Issues or Pull Requests" src="https://img.shields.io/github/issues-pr/AaryanKhClasses/spqr?style=for-the-badge&label=Pull%20Requests&color=blue&link=https%3A%2F%2Fgithub.com%2FAaryanKhClasses%2Fspqr%2Fpulls" style="margin-left: 0.1em">
<img alt="GitHub forks" src="https://img.shields.io/github/forks/AaryanKhClasses/spqr?style=for-the-badge&label=Forks&color=green&link=https%3A%2F%2Fgithub.com%2FAaryanKhClasses%2Fspqr%2Fforks" style="margin-left: 0.1em">
<img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/AaryanKhClasses/spqr?style=for-the-badge&label=Stars&color=yellow" style="margin-left: 0.1em">
</div>

<div align="center">Made using</div>

<div align="center">
<img src="https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
<img src="https://img.shields.io/badge/HeroUI-000?logo=nextui&logoColor=fff&style=for-the-badge">
<img src="https://img.shields.io/badge/Sqlite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" style="margin-left: 0.1em">
<img src="https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=fff&style=for-the-badge">
<img src="https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=fff&style=for-the-badge">
<img src="https://img.shields.io/badge/Razorpay-0C2451?logo=razorpay&logoColor=fff&style=for-the-badge">
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"style="margin-left: 0.1em">
<img src="https://img.shields.io/badge/TypeScript_JSX-007ACC?style=for-the-badge&logo=react&logoColor=white"style="margin-left: 0.1em">
</div>

## Table of Contents:
- Prerequisites
- Setting up RazorPay API Keys
- Setting up Environment Variables
- How to Use - Admin Side
- How to Use - User Side
- Contributing
- License
### Prerequisites:
1. **NodeJS:** To run this project locally, you need to have Node downloaded on your device. [Click Here](https://nodejs.org) to download.
2. **RazorPay Account:** You need to create a [RazorPay](https://razorpay.com) account and verify it in order to receive payments.
3. **A Prisma PostgreSQL Database:** In order to store the data, you need to obtain a database. The project uses one from Prisma. [Click Here](https://www.prisma.io/postgres) to create one.

### Setting Up RazorPay API Keys:

> [!NOTE]
> Check out [Official RazorPay Docs](https://razorpay.com/docs/api/authentication#generate-api-keys) to find out how to generate API Keys.

1. If you just want to have a test of the project, follow the "Test Mode" section.
2. If you want to implement this in a real project, follow the "Live Mode" section.

### Setting up Environment Variables:

> [!WARNING]
> **NEVER** PUSH YOUR ENVIRONMENT VARIABLES PUBLICALLY.

1. There must be a `.env.example` file in the repository.
2. Rename the file to `.env`. It must contain the following:

```env
DATABASE_URL=""
PAYMENT_PRICE=
ACCESS_TOKEN=""
RAZORPAY_KEY_ID=""
RAZORPAY_KEY_SECRET=""
```

3. `DATABASE_URL`: Once creating a Prisma PostgreSQL Database, enter the Database URL provided in the designated place.
4. `PAYMENT_PRICE`: Assuming all payments have the same price, enter that price here.
5. `ACCESS_TOKEN`: For people to not redeem the QR Code themselves, a secret admin-only validation access token is to be set in order for the authorized people to validate user's QR Codes themselves.
6. `RAZORPAY_KEY_ID`: Enter the RazorPay API Key ID here.
7. `RAZORPAY_KEY_SECRET`: Enter the RazorPay API Key Secret here.

### How to Use - Admin Side:
Once the above steps are done (Setting up RazorPay, PostgreSQL, and Environment Variables), either host the project on a service like [Vercel](https://vercel.com) or run it locally:

```sh
$ npm run build
$ npm run start
```

1. For validating QR Codes shown by users who have paid, using the application. Click on the "Validate QR Code" option on the homepage.
2. You will be prompted to enter the Validation Access Token (which you declared in the .env file). This is just so non-authorized users won't redeem their QR Codes beforehand.
3. Scan the QR Code provided by the user for your purposes.

### How to Use - User Side:
1. On the homepage, click the "Proceed to Payment" option. You would be prompted to a RazorPay Payment Interface. You can pay using any of the mentioned methods (Credit / Debit Cards, UPI, etc.)

> [!WARNING]
> It is a good practice to save your **Transaction ID** provided by RazorPay after the payment as this will be useful to verify payment if something goes wrong.

2. A unique QR Code will be generated for you. This QR Code has **one** validity and will be of no use once it is used.

### Contributing:
If you are interested in this project, you can [create an issue](https://github.com/AaryanKhClasses/spqr/issues) under the label "idea". Furthermore, you can [create an pull request](https://github.com/AaryanKhClasses/spqr/pulls) if you directly want to contribute to the project.

### License:
The project is under the GNU GPL-3.0 License. [Click Here](https://github.com/AaryanKhClasses/spqr/blob/main/LICENSE) to view the license.
All the code is owned by [AaryanKhClasses](https://github.com/AaryanKhClasses/).