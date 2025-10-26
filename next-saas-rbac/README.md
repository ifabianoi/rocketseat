# SaaS - Next.js and Fastify + RBAC

Project developed as part of the [Rocketseat](https://app.rocketseat.com.br/journey/saa-s-next-js-rbac/contents) course.  
This **monorepo** uses **Turborepo** and provides a complete foundation for building a **multi-tenant SaaS** application with **Next.js** and **Fastify**, featuring authentication and role-based access control (**RBAC**).

## 🌐 Production application:

Frontend: https://saas-rbac-rocket.vercel.app/

Backend/Swagger UI: https://next-saas-rbac-eu5k.onrender.com/docs

---

## 🚀 Techs and Tools

<table style="width:100%">
	<tr>
    	<th>Tools</th>
    	<td>
			<img alt="Turborepo" src="https://img.shields.io/badge/-Turborepo-05122A?style=flat&logo=turborepo" />&nbsp;
			<img alt="PNPM" src="https://img.shields.io/badge/-PNPM-05122A?style=flat&logo=pnpm" />&nbsp;
			<img alt="Docker" src="https://img.shields.io/badge/-Docker-05122A?style=flat&logo=docker" />&nbsp;
			<img alt="Warp Terminal" src="https://img.shields.io/badge/-Warp%20Terminal-05122A?style=flat&logo=warp" />&nbsp;
		</td>
	</tr>
	<tr>
    	<th>API</th>
    	<td>
			<img alt="Node.js" src="https://img.shields.io/badge/-Node.js-05122A?style=flat&logo=node.js" />&nbsp;
			<img alt="Fastify" src="https://img.shields.io/badge/-Fastify-05122A?style=flat&logo=fastify" />&nbsp;
			<img alt="Typescript" src="https://img.shields.io/badge/-Typescript-05122A?style=flat&logo=typescript" />&nbsp;
			<img alt="Zod" src="https://img.shields.io/badge/-Zod-05122A?style=flat&logo=zod" />&nbsp;
			<img alt="Prisma Client" src="https://img.shields.io/badge/-Prisma%20Client-05122A?style=flat&logo=prisma" />&nbsp;
			<img alt="PostgreSQL" src="https://img.shields.io/badge/-PostgreSQL-05122A?style=flat&logo=postgresql" />&nbsp;
			<img alt="Swagger" src="https://img.shields.io/badge/-Swagger-05122A?style=flat&logo=swagger" />&nbsp;
			<img alt="Nodemailer + Gmail" src="https://img.shields.io/badge/-Nodemailer%20+%20Gmail-05122A?style=flat&logo=gmail" />&nbsp;
			<img alt="AWS SDK" src="https://img.shields.io/badge/-AWS%20SDK-05122A?style=flat&logo=amazonwebservices" />&nbsp;
      		<img alt="Cloudflare R2" src="https://img.shields.io/badge/-Cloudflare%20R2-05122A?style=flat&logo=cloudflare" />&nbsp;
			<img alt="GitHub OAuth" src="https://img.shields.io/badge/-GitHub%20OAuth-05122A?style=flat&logo=github" />&nbsp;
			<img alt="Google OAuth" src="https://img.shields.io/badge/-Google%20OAuth-05122A?style=flat&logo=google" />&nbsp;
		</td>
  	</tr>
 	<tr>
    	<th>Front-end</th>
    	<td>
			<img alt="React 19 RC" src="https://img.shields.io/badge/-React%2019%20RC-05122A?style=flat&logo=react" />&nbsp;
			<img alt="Next.js" src="https://img.shields.io/badge/-Next.js%2015%20with%20App%20Router-05122A?style=flat&logo=next.js" />&nbsp;
			<img alt="React Query" src="https://img.shields.io/badge/-React%20Query-05122A?style=flat&logo=react-query" />&nbsp;
			<img alt="KY HTTP Requests" src="https://img.shields.io/badge/-KY%20HTTP%20Requests-05122A?style=flat&logo=axios" />&nbsp;
			<img alt="Typescript" src="https://img.shields.io/badge/-Typescript-05122A?style=flat&logo=typescript" />&nbsp;
			<img alt="Zod" src="https://img.shields.io/badge/-Zod-05122A?style=flat&logo=zod" />&nbsp;
			<img alt="TailwindCSS" src="https://img.shields.io/badge/TailwindCSS-05122A?style=flat&logo=tailwind-css" />&nbsp;
      		<img alt="Radix UI" src="https://img.shields.io/badge/-Radix%20UI-05122A?style=flat&logo=radix-ui" />&nbsp;
			<img alt="shadcn/ui" src="https://img.shields.io/badge/-shadcn%2Fui-05122A?style=flat&logo=shadcnui" />&nbsp;
   			<img alt="Tabler Icons" src="https://img.shields.io/badge/-Tabler%20Icons-05122A?style=flat&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAACHFBMVEUAAAAiZswfbcUhacMgasQgasQga8Mfa8MfasQfasMeasQfasMga8Qga8Mfa8Mha8IccMYfasMfasMgasQfa8QgbMMeasMfasQfa8QmZr8gasQga8MeasIfa8Mga8Ufa8Mga8Qfa8QebMMfacIiaMUga8Qea8Eaa8kfa8Ufa8QgasMkbcgeasQga8MgasMfa8Qga8Qga8MeasMfasQgasIga8Qga8MgasMfasQfa8MgasQga8QgasQfasMga8QfasMgasQgasMgasQga8Qfa8QfasMhacInYsQga8IgacMfb78eacMgasMia8Yga8Mha8MhbMMgasMgacQfacMfa8QeacUfacMfa8MgasMfacQga8QibMR5ptzU4/T7/P709/y1zutHhc4hbMSwy+r////5+/2Frt92pNvH2vA6fMvP3/Lr8vpOitDw9fv1+fxjmNbg6vf8/f51o9qavORnmtcxdsjk7fj4+v1XkNPL3PHy9vxBgc0jbcWQteL9/v/Y5fUncMZbktPq8fmdvuU9fsz+/v9bktQ+f8zm7vjD1+8/f8zn7/k4e8ru8/o0eMnb5/a40Ozc6Pb7/f5NidBMiNDl7viLsuDF2fDI2vDo8Pk3esoxd8lIhs9+qt3W5PT3+v2fv+ZYkNObveVlmdbx9vvv9ftVjtLX5PREg82Yu+R+qd260e0yd8nV4/T2+f18qNx7p9zS4fOpxuhAgM3r67+jAAAAWnRSTlMADzFNZX+Wq7vL2eju9cpMEmCjx+svqvupFKX+SOlH+vxoY2oWpjITYcjGDkpmfJiVvLja1ufk7ery7/f0+ebj1ZeUfntiLg1fXhARpy2kRURnRqiiS8nY9rq1qCUcAAAC00lEQVRYw6WXZ1sTURCFDz3AUtKBgMFYQLFgiWIBFaQoRVSaA1gXFLui2LA3FFQs2AEbFlRsf9APhOzcbGA3u+fbmWfnfe6du7cMEKqo6JjYuPgES2JSsiSlEKVIUnJSqiUhPi42LToKMyrdarM7aEY57DZr+jTpTpebdMmd4QyTnpnlId3yZGWG5mfnUETKmSXmW70UoXJn83wfGdAcNn63EYA7O1i/ZDIkx9wAIIsMal5g/T1GATQfAOAynE8uAMhzGwe4MwHkkwnlA7CZAdgALDADWAjAYQaQAxSQKRUgWvCtbe279+zdpx/gRAy3+w/IsizLHZ2tegGLsJjbg3JAh7p0AnyI4/bwFEA+clQfYAmWcnssCJCPn9AFKEQCtycVgHzqtB5ABpZx2y1zwhkdgOVI5PZsDyecO68NsGOF4LsucMLFS5qAlfCLgd7LVxjh6jUtwCqsDg1dv8EIN7UARVijit1ihbh9RwOwFuvUwbt9CuGeBmA9csNE7/crddQAFCPciTigDOGBJiDMFB4+UqYwqDkFdREHHiv5T55qFlG1jM+G2DI+117GEjHQ2tnB8l9oHiwbkCQO/yX/lV+91vyVNyKV2zdDwlZ4S0S9wyOjLDY6MtwrbiYLt++EzfieiOiDHKpucTsLB0ofz/9IRESfVIAx8UDZxC0b7Nhn1SkXDlCKMm6/BL/q+RoIqafwjWdsRiy341Mfff8RPCDGf06w7In2X8LSliNN+AsGJ0/kNt03U3bo1fb7z0T/33/6r7YKs5drpfnr3fwDw/QTp8oMYAuArcXG873VAJBhHFBj8qnrqZ18LNeZKSEA5PmN5fuD7ds2r6EK1istS7nRd7KJpsu9XWzbdkTY9vjrQxvHvLpIGk9buPa3YqfOeXhraqfpnqurGuxFGvvX3lBVPXMLX+ls9JUVuixNzX5JaiFqkaSS5qZdrtIyX6OzUvX5f++YHJj9Aeg/AAAAAElFTkSuQmCC" />&nbsp;
	  		<img alt="Day.js" src="https://img.shields.io/badge/-Day.js-05122A?style=flat&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAPFBMVEX/X0z/YE3/VUD/XUr/////Y1D/WUX/emr/koX/Tzn/h3n/qJ3/bFv/xb//+Pj/8O7/ubD/nJD/2NT/5+SPyY4QAAAB2klEQVRYw+1Uy5bsIAiMKPjWRP//Xwd8ZNJz72LWc1KLJNJYFiX0cbx48eLFi78GJXiuP16fqfeWR1APfIeU1jOsnsuVOndz/oNfoYBghzSi3k/Zj+nej0lJBFRKGhavomAKo180jlRkqyUlYQdK9tcTlhYIhn/SeBZjapwHcEZyjCubhsKAcHZCyW6VhfLSpF0MuEHQTHTuNBG2WSwfwAeTJaJVudwFLCFxCpI1F+DxICBngifwdvFOXajQR6GXJMqNqRAinw2t0239IJAwiGn6ozCpXc5S1LOfEX3U7IfoDwI2p1kNoHcBi4AtLueQHEizbyj5J5S8C9gESJEtzA7ph4JJALkC+asMQ5WPt4PfJrI7LhdTAql/SzjQXLa3vq5w+Hg34CZALuAIpUxuIQjEpni5L3YIbYxXbzenJOnRf9NWRSCtx+4E2ATW8zU6Ixb0DNqDX1o3AbKlctXcGgpiBPmOy14hOGOMzeTRlUGuiCvJsAm4kmrBZufy6IzT9PPixsvLAwpV0Nh8brs25XI7so2UqhsEnQm6MSXOwnKVVta3vTJcrFDmEffoaVSPsZVtlJKCeSTo5/DNeV6pj8l9POXFQu7eU8fHOP/+f+f/3y9evHjx4u/gC6cKEcWoMXb/AAAAAElFTkSuQmCC" />&nbsp;
	 		<img alt="React Hot Toast" src="https://img.shields.io/badge/-React%20Hot%20Toast-05122A?style=flat&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAaVBMVEUAAABAIBBDGwBIIAhIKAjfUEjfWEjfVUXfVUpGIwVIIgdHIwZGIgZIIwdIIgZJIwbgVEjiVUngVUnVUURIIgdIIwdJIwbhVUnhVUpIIwfhVUnslYzslY376ej76uj99PP99PT99fT///+Bf3S8AAAAGXRSTlMAEBMgICAgMDBfcn2GmZ+vv7/Az9/f7+/v8uWkkQAAAI5JREFUOMvFk0kOgzAQBM2SQEIIW8Ji9vn/IwEDgkYMJyTXqeUuXyy3EAvm29/xMsWRjw942NpBWhxIv9au/xcn/Iy1dxN5SvKY+2cuGTJHCaFkiZQgL7hVKDuiusQEQk0jLSYQSIFJj7ChT9D7Dv102mACoWqI+grTzT/qQoj4Pp6HxQ4nX6cVM/fdsRwATgtZ79eTN+QAAAAASUVORK5CYII=" />&nbsp;
  		</td>
	</tr>
	<tr>
    	<th>Packages and Config</th>
    	<td>
			<img alt="RBAC Authorizations with CASL" src="https://img.shields.io/badge/-RBAC%20Authorizations%20with%20CASL-05122A?style=flat&logo=data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgd2lkdGg9IjI0IiAgaGVpZ2h0PSIyNCIgIHZpZXdCb3g9IjAgMCAyNCAyNCIgIGZpbGw9IiNmZmZmZmYiICBjbGFzcz0iaWNvbiBpY29uLXRhYmxlciBpY29ucy10YWJsZXItZmlsbGVkIGljb24tdGFibGVyLXNoaWVsZC1sb2NrIj48cGF0aCBzdHJva2U9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTEuOTk4IDJsLjExOCAuMDA3bC4wNTkgLjAwOGwuMDYxIC4wMTNsLjExMSAuMDM0YS45OTMgLjk5MyAwIDAgMSAuMjE3IC4xMTJsLjEwNCAuMDgybC4yNTUgLjIxOGExMSAxMSAwIDAgMCA3LjE4OSAyLjUzN2wuMzQyIC0uMDFhMSAxIDAgMCAxIDEuMDA1IC43MTdhMTMgMTMgMCAwIDEgLTkuMjA4IDE2LjI1YTEgMSAwIDAgMSAtLjUwMiAwYTEzIDEzIDAgMCAxIC05LjIwOSAtMTYuMjVhMSAxIDAgMCAxIDEuMDA1IC0uNzE3YTExIDExIDAgMCAwIDcuNTMxIC0yLjUyN2wuMjYzIC0uMjI1bC4wOTYgLS4wNzVhLjk5MyAuOTkzIDAgMCAxIC4yMTcgLS4xMTJsLjExMiAtLjAzNGEuOTcgLjk3IDAgMCAxIC4xMTkgLS4wMjFsLjExNSAtLjAwN3ptLjAwMiA3YTIgMiAwIDAgMCAtMS45OTUgMS44NWwtLjAwNSAuMTVsLjAwNSAuMTVhMiAyIDAgMCAwIC45OTUgMS41ODF2MS43NjlsLjAwNyAuMTE3YTEgMSAwIDAgMCAxLjk5MyAtLjExN2wuMDAxIC0xLjc2OGEyIDIgMCAwIDAgLTEuMDAxIC0zLjczMnoiIC8+PC9zdmc+" />&nbsp;
			<img alt="Typescript" src="https://img.shields.io/badge/-Typescript-05122A?style=flat&logo=typescript" />&nbsp;
			<img alt="ESLint" src="https://img.shields.io/badge/-ESLint-05122A?style=flat&logo=eslint" />&nbsp;
			<img alt="Prettier" src="https://img.shields.io/badge/-Prettier-05122A?style=flat&logo=prettier" />&nbsp;
			<img alt="T3 Env" src="https://img.shields.io/badge/-T3%20Env-05122A?style=flat&logo=data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjM0MS4zMzMiIGhlaWdodD0iMzQxLjMzMyIgdmlld0JveD0iMCAwIDI1NiAyNTYiPiAgICA8ZyBmaWxsPSIjZmZmIj4gICAgICAgIDxwYXRoIGQ9Ik0wIDQydjEyaDE2NS42bDExLjMtMTIgMTEuMi0xMkgwdjEyek0xOTcuNSA1NS4yYy0xMi4xIDEyLjMtMjkuMSAyOS41LTM3LjggMzguNGwtMTUuOSAxNi4xIDkuMiA3LjggOS4zIDcuOSAxMC4xLTEwLjVjNS41LTUuNyAyNS43LTI2LjUgNDQuOS00Ni4yTDI1Mi4yIDMzaC0zMi43bC0yMiAyMi4yek02My4yIDE0Ny4ybC4zIDczLjMgMTEuOC4zIDExLjcuM1Y3NEg2M2wuMiA3My4yek0yMDkuNyAxMDguN2wtOC43IDguOCA2LjYgMy40YzEyLjkgNi43IDIxLjIgMTggMjMuNiAzMiAzLjEgMTgtNyAzNy0yNC4yIDQ1LjQtNi4xIDMtNy4xIDMuMi0xNy41IDMuMi0xMy43LS4xLTE5LjgtMi4yLTI4LjItOS44LTcuMi02LjYtMTAuNS0xMS45LTEzLjktMjJsLTIuNi03LjktOS40IDkuM2MtNS4yIDUuMi05LjQgOS45LTkuNCAxMC41IDAgMy40IDcuOCAxNi4xIDE0LjEgMjIuOCAxMi45IDEzLjggMjcuMiAyMC41IDQ1LjUgMjEuNCAyNy40IDEuMyA1MS43LTEzIDYzLjQtMzcuMyAxMi4xLTI1IDcuNy01My44LTExLjItNzQtNS4yLTUuNi0xNi43LTE0LjUtMTguNy0xNC41LS4zIDAtNC42IDMuOS05LjQgOC43eiIvPiAgICA8L2c+PC9zdmc+" />&nbsp;
		</td>
	</tr>
	<tr>
    	<th>Deploy</th>
    	<td>
			<img alt="Vercel" src="https://img.shields.io/badge/-Vercel-05122A?style=flat&logo=vercel" />&nbsp;
			<img alt="Render" src="https://img.shields.io/badge/-Render-05122A?style=flat&logo=render" />&nbsp;
			<img alt="Neon" src="https://img.shields.io/badge/-Neon-05122A?style=flat&logo=data:image/png;base64,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" />&nbsp;
		</td>
	</yr>
</table>

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
