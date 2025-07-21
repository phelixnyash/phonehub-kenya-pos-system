# PhoneHub Kenya - Point of Sale System

A comprehensive Point of Sale (POS) system built for PhoneHub Kenya, a phone and electronics business. This system supports product management, sales processing, inventory tracking, customer management, and detailed reporting.

## 🚀 Features

### Core Functionality
- **Product Management**: Add/edit/remove products with IMEI tracking, variations, and bulk import
- **Point of Sale**: Intuitive sales interface with barcode/IMEI scanning
- **Inventory Management**: Real-time stock tracking with low stock alerts
- **Customer Management**: Customer database with purchase history
- **Sales Processing**: Multiple payment methods (Cash, M-PESA, Card)
- **User Management**: Admin and cashier roles with permissions
- **Reports & Analytics**: Comprehensive sales and inventory reports

### Technical Features
- **Modern UI**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Database**: MySQL with comprehensive schema
- **Authentication**: JWT-based secure authentication
- **Responsive Design**: Works on desktop and tablet devices
- **Real-time Updates**: Live inventory and sales tracking
- **Audit Logging**: Complete transaction history

## 🛠️ Technology Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Shadcn UI Components
- **Backend**: Next.js API Routes
- **Database**: MySQL
- **Authentication**: JWT with bcrypt
- **UI Components**: Radix UI primitives
- **Icons**: Emoji-based (no external icon dependencies)

## 📋 Prerequisites

Before running this application, make sure you have:

- Node.js 18+ installed
- MySQL 8.0+ installed and running
- npm or yarn package manager

## 🚀 Quick Start

### 1. Clone and Install Dependencies

```bash
git clone <repository-url>
cd phonehub-pos
npm install --legacy-peer-deps
```

### 2. Database Setup

Create a MySQL database:

```sql
CREATE DATABASE phonehub_pos;
```

### 3. Environment Configuration

Copy the `.env.local` file and update the database credentials:

```bash
# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=phonehub_pos
DB_PORT=3306

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d

# Company Information
COMPANY_NAME=PhoneHub Kenya
COMPANY_ADDRESS=Nairobi, Kenya
COMPANY_PHONE=+254 700 000 000
COMPANY_EMAIL=info@phonehubkenya.com
```

### 4. Initialize Database

Run the database initialization script:

```bash
npm run db:setup
```

This will:
- Create all necessary tables
- Insert sample categories and brands
- Create default users
- Add sample products and customers

### 5. Start the Application

```bash
npm run dev
```

The application will be available at `http://localhost:8000`

## 👤 Default Login Credentials

After database initialization, you can log in with:

**Administrator Account:**
- Username: `admin`
- Password: `admin123`

**Cashier Account:**
- Username: `cashier`
- Password: `cashier123`

## 📱 System Overview

### Dashboard
- Real-time sales statistics
- Low stock alerts
- Recent transactions
- Top-selling products
- Revenue analytics

### Point of Sale (POS)
- Product search and selection
- Shopping cart management
- Multiple payment methods
- Receipt generation
- Customer selection

### Product Management
- Add/edit products with variations
- IMEI/Serial number tracking
- Bulk product import
- Category and brand management
- Stock level monitoring

### Sales Management
- View all transactions
- Detailed sale information
- Payment method breakdown
- Receipt reprinting
- Sales filtering and search

### Customer Management
- Customer database
- Purchase history tracking
- Customer statistics
- Contact information management

### Inventory Management
- Real-time stock levels
- Stock movement tracking
- Low stock alerts
- Purchase order management
- Supplier management

### Reports & Analytics
- Daily/weekly/monthly sales reports
- Product performance analysis
- Inventory valuation
- Payment method statistics
- Export capabilities

## 🎨 Branding

The system features PhoneHub Kenya branding with:
- Kenyan flag-inspired color scheme (Green, Red, Black)
- Custom logo and typography
- Professional receipt templates
- Consistent brand identity throughout

## 🔧 Development

### Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard pages
│   ├── pos/              # Point of Sale interface
│   ├── products/         # Product management
│   ├── sales/            # Sales management
│   └── customers/        # Customer management
├── components/           # React components
│   ├── layout/          # Layout components
│   └── ui/              # UI components (Shadcn)
├── lib/                 # Utilities and configurations
│   ├── db/              # Database utilities
│   ├── types/           # TypeScript types
│   └── auth.ts          # Authentication utilities
└── hooks/               # Custom React hooks
```

### Database Schema

The system uses a comprehensive MySQL schema with tables for:
- Users and authentication
- Products, categories, and brands
- Customers and sales
- Inventory and stock movements
- Audit logs and system settings

### API Endpoints

- `/api/auth/login` - User authentication
- `/api/products` - Product management
- `/api/sales` - Sales processing
- `/api/customers` - Customer management
- `/api/dashboard` - Analytics data
- `/api/categories` - Category management
- `/api/brands` - Brand management

## 🚀 Deployment

### Production Setup

1. Set up a production MySQL database
2. Update environment variables for production
3. Build the application: `npm run build`
4. Start the production server: `npm start`

### Environment Variables for Production

```bash
DB_HOST=your-production-db-host
DB_USER=your-production-db-user
DB_PASSWORD=your-production-db-password
JWT_SECRET=your-production-jwt-secret
NEXTAUTH_URL=https://your-domain.com
```

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Role-based access control
- SQL injection prevention
- Input validation and sanitization
- Audit logging for all transactions

## 📊 Sample Data

The system comes with sample data including:
- Product categories (Smartphones, Tablets, Accessories, etc.)
- Popular brands (Apple, Samsung, Huawei, Tecno, etc.)
- Sample products with realistic pricing
- Demo customers
- Sample suppliers

## 🆘 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Verify MySQL is running
   - Check database credentials in `.env.local`
   - Ensure database exists

2. **Port Already in Use**
   - Kill process using port 8000: `fuser -k 8000/tcp`
   - Or change port in package.json

3. **Dependency Issues**
   - Use `--legacy-peer-deps` flag with npm install
   - Clear node_modules and reinstall if needed

### Support

For technical support or questions:
- Email: support@phonehubkenya.com
- Phone: +254 700 000 000

## 📄 License

This project is proprietary software developed for PhoneHub Kenya.

## 🤝 Contributing

This is a private project for PhoneHub Kenya. For internal development:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit for review

---

**PhoneHub Kenya POS System** - Empowering electronics retail with modern technology.
