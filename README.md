# Next.js Cognito Authentication
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![NextJS](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![Amazon AWS](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![Zod](https://img.shields.io/badge/Zod-000000?style=for-the-badge&logo=zod&logoColor=3068B7)

## Overview

This repository demonstrates how to implement **AWS Cognito authentication** in a **Next.js** application. It uses **AWS Amplify** to simplify the integration of Cognito services with the app. This is an example where users can sign up, sign in, and log out, all while utilizing **Cognito** as the authentication provider.

## Features

- **User authentication**: Sign up, sign in, and log out functionalities powered by AWS Cognito.
- **Secure sessions**: Automatically manage user sessions using **AWS Amplify**.
- **Cognito user pool**: Integration with a Cognito user pool for authentication.
- **Protected routes**: Ensures that only authenticated users can access specific pages.

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/nextjs-cognito-auth.git
   cd nextjs-cognito-auth
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure AWS Cognito:**

   Set up a Cognito user pool and app client in the [Cognito Console](https://console.aws.amazon.com/cognito). Note down the **User Pool ID** and **App Client ID**.

4. **Add environment variables:**

   In the root of your project, create a `.env.local` file and add the following:

   ```bash
   NEXT_PUBLIC_COGNITO_USER_POOL_ID=your_user_pool_id
   NEXT_PUBLIC_COGNITO_CLIENT_ID=your_app_client_id
   NEXT_PUBLIC_COGNITO_REGION=your_aws_region
   ```

5. **Run the application:**

   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000` in your browser.