## Currency Exchange Project

Welcome to the Currency Exchange project! This is a web application that allows users to calculate currency rates.

### Environment Setup

Before running the project, you need to update the necessary environment variables . You can provide these variables by creating a .env.local file. Here are the required variables:

```
API_KEY=d6b52b58534f286ca691f4b8
NODEMAILER_EMAIL=elsielatorr14@gmail.com
NODEMAILER_PASSWORD=uypz iapn hpop uzyh

```

Or you can also create your own credentials by following this step:

#### To GET API_KEY

**[1/3]** -Go to this website

```
https://www.exchangerate-api.com/
```

**[2/3]** -In this you can get api key by creating account.

**[2/3]** -Update the API_KEY environment variable in your .env.local file with your copied API_KEY.

#### For Nodemailer credentials

**[1/4]** -Create a dummy Gmail account or can use exisiting email account.

**[2/4]** -After creating account,you'll need to adjust security setting to allow less-access to the account and need to enable 2 factors authentication.

**[3/4]** -After enabling security setting.You need to go to this website and generate a password for your new app.

```
https://myaccount.google.com/apppasswords
```

**[4/4]** -Update the NODEMAILER_EMAIL environment variable with your email and NODEMAILER_PASSWORD with generated password in your .env.local file.

## Getting Started

After setting up environment variables,you can run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
