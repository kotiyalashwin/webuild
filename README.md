# WeBuild 🚀

> A collaborative platform for developers to team up and build GitHub projects together.

---

## ✨ Overview

**WeBuild** allows project authors to link their GitHub repositories and form teams by inviting contributors for different roles like Backend Developer, DevOps Engineer, Frontend Developer, etc.  
Team members can collaborate by tracking commits, viewing pull requests, and commenting directly on commits to discuss improvements.

---

## 📚 Core Features

- 🔒 GitHub OAuth Authentication
- 📂 Add GitHub repositories as Projects
- 👥 Invite contributors or accept join requests
- 🏷️ Assign roles (Backend, Frontend, DevOps, etc.)
- 🧩 Real-time commit tracking and listing
- 💬 Per-commit threaded conversations
- 📊 Personal dashboard for created and joined projects

---

## 🛠 Tech Stack

| Part             | Tech                                       |
| :--------------- | :----------------------------------------- |
| Frontend         | Next.js 14 (App Router)                    |
| Styling          | Tailwind CSS                               |
| State Management | Zustand                                    |
| Backend          | Next.js API Routes (Node.js/Express style) |
| Authentication   | NextAuth.js (GitHub Provider)              |
| Database         | PostgreSQL + Prisma ORM                    |
| Hosting          | Vercel                                     |
| APIs             | GitHub REST API, GitHub Webhooks           |
| Others           | Shadcn UI Components                       |

---

## 🚀 Local Setup Instructions

Follow these steps to run WeBuild locally:

1. **Clone the repository**

```bash
git clone https://github.com/your-username/we-build.git
cd we-build
```

2. **Install dependencies**

```bash
pnpm install
# or
npm install
# or
yarn install
```

3. **Configure Environment Variables**

Create a `.env` file at the root and add:

```bash
DATABASE_URL=your_postgres_connection_string
GITHUB_ID=your_github_oauth_client_id
GITHUB_SECRET=your_github_oauth_client_secret
NEXTAUTH_SECRET=your_random_secret_key
NEXTAUTH_URL=http://localhost:3000
```

4. **Set up Prisma and your Database**

```bash
npx prisma generate
npx prisma migrate dev --name init
```

5. **Run the Development Server**

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

6. **Visit your app**

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧠 Future Enhancements

- 🔔 In-app Notifications for new comments or invites
- 📬 Email notifications (optional)
- 📈 Project analytics (number of commits, pull requests merged)
- 🧹 Admin dashboard for project management
- 🗣️ Slack-like "@mention" system in comments
- 🎨 Profile pages for users

---

## 🧑‍💻 Author

- **Ashwin Kotiyal**  
  [GitHub](https://github.com/kotiyalashwin) | [LinkedIn](https://linkedin.com/in/ashwin-kotiyal) | [Email](mailto:ashwinkotiyal07@gmail.com)

---
