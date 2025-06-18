# Modern Portfolio Template

A modern portfolio website template built with Laravel (backend) and Next.js (frontend). This project provides a fully functional, responsive portfolio site with a clean API-driven architecture.

## Technologies Used

- **Backend**: Laravel 12 REST API
- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Database**: MySQL/SQLite

## Project Structure

- `/backend` - Laravel API server
- `/frontend` - Next.js frontend application

## Features

- Responsive design for all screen sizes
- API-driven architecture with Laravel backend
- Modern React components with Next.js
- Portfolio information section with customizable content
- Projects showcase with images and descriptions
- Skills display with categories and proficiency levels
- Contact form with email notification functionality
- Admin dashboard for content management
- SEO optimized structure including:
  - Next.js metadata API for dynamic meta tags
  - Semantic HTML structure
  - Optimized image loading with Next.js Image component
  - Customizable page titles and descriptions
  - Structured data (JSON-LD) for rich search results
  - Sitemap generation
  - Robots.txt configuration
- Fast page loads with Next.js optimizations (SSR and ISR)
- TypeScript for improved developer experience and code quality

## Getting Started

### Prerequisites

- PHP 8.1 or later with Composer
- Node.js 18 or later with npm
- MySQL or SQLite

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install PHP dependencies:
   ```
   composer install
   ```

3. Copy the example environment file:
   ```
   cp .env.example .env
   ```

4. Generate application key:
   ```
   php artisan key:generate
   ```

5. Configure your database in the `.env` file

6. Run migrations and seeders:
   ```
   php artisan migrate --seed
   ```

7. Start the development server:
   ```
   php artisan serve
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install Node.js dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## SEO Configuration

The portfolio template comes with built-in SEO optimization features:

### Metadata Configuration

Edit the metadata configuration in `frontend/app/config.ts` to set default SEO properties:

```typescript
export const siteConfig = {
  name: "Your Name - Portfolio",
  description: "Professional portfolio showcasing my work and skills",
  url: "https://yourportfolio.com",
  ogImage: "https://yourportfolio.com/og.jpg",
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername"
  },
}
```

### Page-Specific SEO

Each page can have custom SEO settings by using Next.js Metadata API:

```typescript
export const metadata = {
  title: "Project Name | Your Portfolio",
  description: "Detailed information about this specific project",
  openGraph: {
    images: ['/projects/project-image.jpg'],
  },
}
```

### Structured Data

The portfolio automatically generates structured data (JSON-LD) for your portfolio information and projects to enhance search engine visibility.

## API Endpoints

- `GET /api/portfolio` - Get portfolio information
- `GET /api/projects` - Get all projects
- `GET /api/projects/{id}` - Get specific project details
- `GET /api/skills` - Get all skills
- `GET /api/skills/categories` - Get skills grouped by category
- `POST /api/contacts` - Submit contact form

## Database Models

- **Portfolio** - Main information about the person (name, bio, avatar, social links, etc.)
- **Projects** - Projects showcased in the portfolio (title, description, image, link, technologies)
- **Skills** - Technical skills and proficiency levels (name, category, proficiency percentage)
- **Contact** - Form submissions from users (name, email, message, status)

## Profile & Media Management

### Profile Image

Your portfolio profile image can be managed in two ways:

1. **Through the Admin Interface**:
   - Navigate to the admin dashboard
   - Go to the Portfolio section
   - Upload your profile image through the image upload field
   - The image will be stored in the backend and served via the API

2. **Direct File Placement**:
   - Replace the default image files in `frontend/public/images/profile.jpg`
   - For best results, use an image with 1:1 aspect ratio (square)
   - Recommended size: 500x500px or larger
   - Supported formats: JPG, PNG, WebP

### Project Images

Project images should be:
- Placed in `frontend/public/projects/` directory
- Named consistently (e.g., project-name.jpg)
- Referenced in the project data either through the admin interface or API
- Optimized for web (compressed, appropriate resolution)

### Skills Icons

For skill icons:
- Place SVG or PNG icons in `frontend/public/skills/`
- Use standard icon naming (e.g., javascript.svg, react.svg)
- For best visual consistency, use SVG format where possible

## Admin Access

1. Navigate to `/admin/login` in your browser
2. Login with the credentials:
   - Email: admin@example.com
   - Password: password

## Development Workflow

1. Start the Laravel development server:
   ```
   cd backend
   php artisan serve
   ```

2. Start the Next.js development server:
   ```
   cd frontend
   npm run dev
   ```

3. Make your changes following these guidelines:
   - For backend changes, create/modify controllers, models, and routes in the Laravel project
   - For frontend changes, update the React components in the Next.js project
   - Keep API URLs consistent between development and production environments

## Deployment

### Backend Deployment

1. Set up a production-ready web server (Apache, Nginx)
2. Configure your `.env` file for production
3. Install dependencies: `composer install --optimize-autoloader --no-dev`
4. Run migrations: `php artisan migrate`
5. Optimize Laravel: `php artisan optimize`

### Frontend Deployment

1. Build the Next.js application:
   ```
   cd frontend
   npm run build
   ```

2. Deploy the generated `.next` folder to your hosting provider

3. Configure environment variables for production API endpoints

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Customization

- Update the portfolio information in the database
- Add your own projects with images
- Customize the skills with your own proficiency levels
- Modify the frontend components in `/frontend/app/components`

## Deployment

### Backend

1. Set up a production-ready web server (Nginx, Apache)
2. Configure your `.env` file for production
3. Run `php artisan optimize` to prepare for production

### Frontend

1. Build the production version:
   ```
   npm run build
   ```
2. Deploy the `/frontend/.next` directory to your hosting provider

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
