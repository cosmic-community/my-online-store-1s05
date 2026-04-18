# Luxe Maison - Luxury Brand Store

![App Preview](https://imgix.cosmicjs.com/4907b0e0-3ad2-11f1-8948-413c2f327982-autopilot-photo-1590874103328-eac38a683ce7-1776481026788.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A sophisticated luxury brand e-commerce storefront built with Next.js and powered by Cosmic CMS.

## Features

- 🛍️ **Product Catalog** - Browse luxury products with detailed information
- 🏷️ **Category Collections** - Curated product categories
- ⭐ **Customer Reviews** - Verified purchase reviews with star ratings
- 🖼️ **Image Galleries** - High-resolution product imagery
- 📱 **Responsive Design** - Elegant on all devices
- ⚡ **Server Components** - Fast, SEO-friendly rendering
- 🎨 **Luxury Aesthetic** - Editorial typography and refined design

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69e2f296e8787a5bd2e1b1a0&clone_repository=69e2f3c5e8787a5bd2e1b1dd)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for an online store with products (including images, pricing, description, and inventory status), product categories, and customer reviews.
> 
> User instructions: A luxury brand store built using TanStack Start"

### Code Generation Prompt

> Build a Next.js application for an online business called "My Online Store". The content is managed in Cosmic CMS with the following object types: categories, products, reviews. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
> 
> User instructions: A luxury brand store built using TanStack Start

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Cosmic CMS** - Content management
- **imgix** - Image optimization

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

```bash
bun install
```

Set environment variables, then:

```bash
bun run dev
```

## Cosmic SDK Examples

```typescript
// Fetch all products with category info
const { objects } = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch product reviews
const { objects } = await cosmic.objects
  .find({ type: 'reviews', 'metadata.product': productId })
  .depth(1)
```

## Cosmic CMS Integration

This app integrates with three content types:
- **Categories** - Product categories with images
- **Products** - Full product catalog with gallery, pricing, and inventory
- **Reviews** - Customer reviews tied to products

## Deployment

Deploy to Vercel or Netlify. Set environment variables: `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`.

<!-- README_END -->