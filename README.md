# Tolu Shekoni's Portfolio - Powered by Create T3 Stack

Welcome to the repository for Tolu Shekoni's portfolio - a showcase of expertise in software development, data science, engineering, and continuous improvement.

## About This Site

This portfolio website is built on the cutting-edge Create T3 Stack, demonstrating expertise in modern web development. The site features:

- A sleek, responsive design with a dark theme for optimal viewing
- Interactive project showcases with smooth animations
- Integration of various technologies and services

## Technology Stack

This project leverages a powerful and modern tech stack:

- **Next.js 16**: For server-side rendering and optimal performance
- **React 18**: For building a dynamic and interactive user interface
- **TypeScript**: For type-safe code and improved developer experience
- **Tailwind CSS**: For rapid and responsive styling
- **Prisma**: For type-safe database access
- **Framer Motion**: For smooth animations and transitions
- **Radix UI**: For accessible and customizable UI components
- **Zod**: For runtime type checking and validation
- **React Hook Form**: For efficient form handling
- **Vercel**: For deployment and analytics

Additional technologies include:

- SendGrid for email functionality
- Vercel Postgres for database storage

Component Libraries:
A mix of components that were built custom, and some from Shadn/UI and Acertinity. All components have been customized to fit the theme and style of the site as well as refactored for better performance, type safety and accessibility.

- Various Radix UI components for enhanced UI elements
- Shadcn/UI
- Acertinity

## Featured Projects

The site highlights several public projects:

1. **Web3 Portfolio**: Blockchain and decentralized application development showcase
2. **Data Science Projects**: Machine learning models and analytics solutions
3. **Engineering Solutions**: Process optimization and continuous improvement projects
4. **Portfolio Website**: This site built with the T3 stack

## Get in Touch

Interested in collaborating or learning more? The site provides easy ways to connect through GitHub and email <tolu.a.shekoni@gmail.com>.

## Deployment to Vercel

This project is optimized for deployment on Vercel. Follow these steps to deploy:

### Prerequisites

- A [Vercel account](https://vercel.com/signup)
- A [SendGrid account](https://sendgrid.com/) for contact form functionality
- A Vercel Postgres database (optional, for storing contact form submissions)

### Environment Variables

Before deploying, you need to set up the following environment variables in your Vercel project settings:

1. **Database (Vercel Postgres)**
   - `POSTGRES_PRISMA_URL` - Automatically set when you connect Vercel Postgres
   - `POSTGRES_URL_NON_POOLING` - Automatically set when you connect Vercel Postgres

2. **SendGrid API Key**
   - `SENDGRID_API_KEY` - Get your API key from [SendGrid Settings](https://app.sendgrid.com/settings/api_keys)

3. **Node Environment**
   - `NODE_ENV` - Set to `production` (automatically set by Vercel)

### Deployment Steps

#### Option 1: Deploy with Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

#### Option 2: Deploy via Git Integration

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/new)
3. Import your GitHub repository
4. Configure your environment variables in the Vercel project settings
5. Deploy!

### Post-Deployment Setup

1. **Connect Vercel Postgres** (optional)
   - In your Vercel project dashboard, go to the "Storage" tab
   - Create a new Postgres database
   - Connect it to your project
   - Run migrations: `npx prisma migrate deploy`

2. **Configure SendGrid**
   - Add your SendGrid API key to environment variables
   - Verify the sender email address in SendGrid

3. **Test the deployment**
   - Visit your deployed URL
   - Test the contact form to ensure email functionality works

### Build Configuration

The project uses the following build configuration (defined in `vercel.json`):

```json
{
  "buildCommand": "npm run build",
  "framework": "nextjs",
  "outputDirectory": ".next"
}
```

### Troubleshooting

- **Build fails**: Check that all environment variables are properly set
- **Contact form not working**: Verify your SendGrid API key is valid and the sender email is verified
- **Database errors**: Ensure Vercel Postgres is connected and migrations are run

For more information, visit the [Vercel Documentation](https://vercel.com/docs).

---

Built with passion and powered by the Create T3 Stack. © 2024 Tolu Shekoni
