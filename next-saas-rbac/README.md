# SaaS - Next.js and Fastify + RBAC

Project developed as part of the [Rocketseat](https://app.rocketseat.com.br/journey/saa-s-next-js-rbac/contents) course.  
This **monorepo** uses **Turborepo** and provides a complete foundation for building a **multi-tenant SaaS** application with **Next.js** and **Fastify**, featuring authentication and role-based access control (**RBAC**).

## 🌐 Production application:

Frontend: https://saas-rbac-rocket.vercel.app/

Backend/Swagger UI: https://next-saas-rbac-eu5k.onrender.com/docs

---

## 🚀 Tech Stack

| Category              | Technologies                                                                                                                                                    |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tools**             | Turborepo • PNPM • Docker • Warp Terminal                                                                                                                       |
| **API / Backend**     | Node.js • Fastify • TypeScript • Zod • Prisma Client • PostgreSQL • Swagger • Nodemailer (Gmail) • AWS SDK • Cloudflare R2 • OAuth (GitHub, Google)             |
| **Frontend**          | React 19 RC • Next.js 15 (App Router) • React Query • KY HTTP • TypeScript • Zod • TailwindCSS • Radix UI • shadcn/ui • Tabler Icons • Day.js • React Hot Toast |
| **Packages & Config** | RBAC with CASL • ESLint • Prettier • T3 Env                                                                                                                     |
| **Deployment**        | Vercel • Render • Neon                                                                                                                                          |

---

## 🧩 Project Structure

- **Monorepo** managed with **Turborepo**
- Separate **apps** for `web` and `api`
- **Full integration** between backend and frontend
- **Authentication** via OAuth (GitHub and Google)
- **Role-based access control (RBAC)** with CASL
- **Database** powered by **PostgreSQL** and **Prisma**
- **File uploads** using **Cloudflare R2**

---

## ⚙️ Core Features

- Authentication and authorization with RBAC
- Multi-tenant architecture
- OAuth provider integration
- Schema validation with Zod
- Modular UI built with TailwindCSS and Radix
- Automated deployment on Vercel and Render

---

## 📚 Purpose

This project serves as a **learning resource** and **starter template** for building modern, scalable, and secure SaaS applications using the **Next.js + Fastify** stack.

---

## Features

### Authentication

- [x] It should be able to authenticate using e-mail & password;
- [x] It should be able to authenticate using Github account;
- [x] It should be able to recover password using e-mail;
- [x] It should be able to create an account (e-mail, name, and password);

### Organizations

- [x] It should be able to create a new organization;
- [x] It should be able to get organizations to which the user belongs;
- [x] It should be able to update an organization;
- [x] It should be able to shutdown an organization;
- [x] It should be able to transfer organization ownership;

### Invites

- [x] It should be able to invite a new member (e-mail, role);
- [x] It should be able to accept an invite;
- [x] It should be able to revoke a pending invite;

### Members

- [x] It should be able to get organization members;
- [x] It should be able to update a member role;

### Projects

- [x] It should be able to get projects within a organization;
- [x] It should be able to create a new project (name, description);
- [x] It should be able to update a project (name, description);
- [x] It should be able to delete a project;

### Billing

- [x] It should be able to get billing details for organization ($20 per project / $10 per member excluding billing role);

### Roles

- Administrator
- Member
- Billing

### Permissions table

|                        | Administrator | Member | Billing | Anonymous |
| ---------------------- | ------------- | ------ | ------- | --------- |
| Update organization    | ✅            | ❌     | ❌      | ❌        |
| Delete organization    | ✅            | ❌     | ❌      | ❌        |
| Invite a member        | ✅            | ❌     | ❌      | ❌        |
| Revoke an invite       | ✅            | ❌     | ❌      | ❌        |
| List members           | ✅            | ✅     | ✅      | ❌        |
| Transfer ownership     | ⚠️            | ❌     | ❌      | ❌        |
| Update member role     | ✅            | ❌     | ❌      | ❌        |
| Delete member          | ✅            | ⚠️     | ❌      | ❌        |
| List projects          | ✅            | ✅     | ✅      | ❌        |
| Create a new project   | ✅            | ✅     | ❌      | ❌        |
| Update a project       | ✅            | ⚠️     | ❌      | ❌        |
| Delete a project       | ✅            | ⚠️     | ❌      | ❌        |
| Get billing details    | ✅            | ❌     | ✅      | ❌        |
| Export billing details | ✅            | ❌     | ✅      | ❌        |

> ✅ = allowed
> ❌ = not allowed
> ⚠️ = allowed w/ conditions

#### Conditions

- Only owners may transfer organization ownership;
- Only administrators and project authors may update/delete the project;
- Members can leave their own organization;
