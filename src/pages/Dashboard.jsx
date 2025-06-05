import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  FileText,
  Upload,
  Search,
  Users,
  BarChart2,
  Clock,
  AlertCircle,
  CheckCircle2,
  XCircle,
  FileUp,
  MessageSquare,
  PenTool,
  UserPlus
} from 'lucide-react';
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import DashboardLayout from '../components/layout/DashboardLayout';

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [stats, setStats] = useState({
    totalDocuments: 0,
    activeContracts: 0,
    teamMembers: 0,
    analyticsScore: 0
  });

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      
      console.log('Checking auth - Token:', !!token, 'UserId:', userId);
      
      if (!token || !userId) {
        console.log('No token or userId found, redirecting to login');
        navigate('/login');
        return false;
      }
      return true;
    };

    if (checkAuth()) {
      fetchDashboardData();
    }
  }, [navigate]);

  const fetchDashboardData = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');
      
      console.log('Fetching dashboard data for user:', userId);
      
      if (!userId || !token) {
        console.log('No token or userId found during fetch, redirecting to login');
        navigate('/login');
        return;
      }

      const response = await axios.get(`http://localhost:8080/api/dashboard?userId=${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      console.log('Dashboard data fetched successfully:', response.data);
      setStats(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      if (error.response?.status === 401) {
        console.log('Unauthorized, redirecting to login');
        navigate('/login');
      } else {
        // Handle different types of error responses
        if (error.response?.data) {
          if (typeof error.response.data === 'string') {
            setError(error.response.data);
          } else if (error.response.data.error) {
            setError(error.response.data.error);
          } else if (error.response.data.message) {
            setError(error.response.data.message);
          } else {
            setError('Failed to fetch dashboard data. Please try again.');
          }
        } else {
          setError('Failed to fetch dashboard data. Please try again.');
        }
      }
      setLoading(false);
    }
  };

  // Mock data for demonstration
  const documentStatusData = [
    { name: 'Active', value: 12, color: '#10B981' },
    { name: 'Pending', value: 5, color: '#F59E0B' },
    { name: 'Archived', value: 3, color: '#6B7280' }
  ];

  const weeklyUploadsData = [
    { name: 'Mon', uploads: 4 },
    { name: 'Tue', uploads: 3 },
    { name: 'Wed', uploads: 6 },
    { name: 'Thu', uploads: 2 },
    { name: 'Fri', uploads: 5 },
    { name: 'Sat', uploads: 1 },
    { name: 'Sun', uploads: 0 }
  ];

  const recentDocuments = [
    {
      id: 1,
      name: 'Contract Agreement.pdf',
      status: 'active',
      lastModified: '2 hours ago'
    },
    {
      id: 2,
      name: 'Terms of Service.docx',
      status: 'pending',
      lastModified: '1 day ago'
    },
    {
      id: 3,
      name: 'Privacy Policy.pdf',
      status: 'archived',
      lastModified: '3 days ago'
    }
  ];

  const notifications = [
    {
      id: 1,
      message: 'New document shared with you',
      time: '5 minutes ago'
    },
    {
      id: 2,
      message: 'Contract review requested',
      time: '1 hour ago'
    },
    {
      id: 3,
      message: 'Document updated by team member',
      time: '2 hours ago'
    }
  ];

  const quickActions = [
    {
      id: 1,
      name: 'Upload Document',
      icon: FileUp,
      color: 'bg-blue-500'
    },
    {
      id: 2,
      name: 'Request Review',
      icon: MessageSquare,
      color: 'bg-green-500'
    },
    {
      id: 3,
      name: 'Add Annotation',
      icon: PenTool,
      color: 'bg-purple-500'
    },
    {
      id: 4,
      name: 'Invite Team Member',
      icon: UserPlus,
      color: 'bg-orange-500'
    }
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <DashboardLayout>
      {error && (
        <div className="mb-4 p-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
          {error}
        </div>
      )}

      <div className="flex flex-wrap justify-between gap-3 mb-8">
        <div className="flex min-w-72 flex-col gap-3">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
          <p className="text-gray-600">Here's what's happening with your legal documents</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Documents</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalDocuments}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Contracts</p>
              <p className="text-2xl font-bold text-gray-900">{stats.activeContracts}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Team Members</p>
              <p className="text-2xl font-bold text-gray-900">{stats.teamMembers}</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Analytics Score</p>
              <p className="text-2xl font-bold text-gray-900">{stats.analyticsScore}%</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <BarChart2 className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Links */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-4">
              {quickActions.map((action) => (
                <button
                  key={action.id}
                  className={`flex flex-col items-center justify-center p-4 rounded-lg ${action.color} bg-opacity-10 hover:bg-opacity-20 transition-colors`}
                >
                  <action.icon className={`h-6 w-6 ${action.color.replace('bg-', 'text-')}`} />
                  <span className="mt-2 text-sm font-medium text-gray-900">{action.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {recentDocuments.map((activity) => (
                <div key={activity.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg ${
                        activity.status === 'active' ? 'bg-green-100' :
                        activity.status === 'pending' ? 'bg-yellow-100' :
                        'bg-gray-100'
                      } flex items-center justify-center`}>
                        <FileText className={`w-5 h-5 ${
                          activity.status === 'active' ? 'text-green-600' :
                          activity.status === 'pending' ? 'text-yellow-600' :
                          'text-gray-600'
                        }`} />
                      </div>
                      <div>
                        <h3 className="text-base font-medium text-gray-900">{activity.name}</h3>
                        <p className="text-sm text-gray-600">{activity.lastModified}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <button
                        onClick={() => navigate(`/documents/${activity.id}`)}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Open
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard; 