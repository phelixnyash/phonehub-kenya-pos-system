import { NextRequest, NextResponse } from 'next/server';
import { authenticateUser, generateToken } from '@/lib/auth';
import { executeQuery } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: 'Username and password are required' },
        { status: 400 }
      );
    }

    // Authenticate user
    const user = await authenticateUser(username, password);
    
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = generateToken(user);

    // Log the login attempt
    await executeQuery(
      `INSERT INTO audit_logs (user_id, action, table_name, ip_address, user_agent) 
       VALUES (?, 'login', 'users', ?, ?)`,
      [
        user.id,
        request.headers.get('x-forwarded-for') || 'unknown',
        request.headers.get('user-agent') || 'unknown'
      ]
    );

    return NextResponse.json({
      success: true,
      data: {
        user,
        token,
      },
      message: 'Login successful'
    });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
