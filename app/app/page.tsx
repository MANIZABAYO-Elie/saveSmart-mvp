"use client";

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  Toast,
  ToastProvider,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction
} from "@/components/ui/toast"
import { PiggyBank, Target, TrendingUp, Bell, Share2, Settings, Plus, ArrowRight, CheckCircle, Calendar, Wallet, BarChart3, Smartphone, CreditCard, DollarSign, User, ArrowLeft, Save, AlertTriangle, Download, Eye, EyeOff, Trash2, Filter, MoreVertical, Users, Lightbulb, Globe, Palette, Shield, Mail, Lock } from 'lucide-react'
import Link from "next/link"
import { formatDistanceToNow } from 'date-fns'

type AppStep = 'welcome' | 'login' | 'signup' | 'create-account' | 'budget' | 'dashboard' | 'checkin' | 'payment' | 'add-funds' | 'settings' | 'notifications'

export default function SaveSmartApp() {
  const [currentStep, setCurrentStep] = useState<AppStep>('welcome')
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastType, setToastType] = useState<'success' | 'error' | 'info'>('info')

  // Enhanced user data with more realistic information
  const [userData, setUserData] = useState({
    name: 'John Mukamana',
    email: 'john.mukamana@gmail.com',
    phone: '+250788123456',
    income: '250000',
    savingsGoal: '50000',
    expenses: [] as Array<{category: string, amount: string}>,
    profileComplete: false,
    joinDate: new Date('2024-01-15').toISOString(),
    lastLogin: new Date().toISOString()
  })

  // Enhanced savings data with realistic progression
  const [savingsData, setSavingsData] = useState({
    currentSavings: 45000,
    monthlyGoal: 50000,
    totalSaved: 180000,
    streakDays: 23,
    balance: 125000,
    autoSaveAmount: 5000,
    lastAutoSave: new Date().toISOString(),
    savingsRate: 18, // percentage of income
    goalProgress: 90, // percentage of monthly goal
    yearlyGoal: 600000,
    yearlyProgress: 30, // percentage of yearly goal
    transactions: [
      { id: 1, type: 'auto_save', amount: 5000, date: new Date().toISOString(), description: 'Daily Auto Save', status: 'completed' },
      { id: 2, type: 'auto_save', amount: 5000, date: new Date(Date.now() - 86400000).toISOString(), description: 'Daily Auto Save', status: 'completed' },
      { id: 3, type: 'manual_save', amount: 10000, date: new Date(Date.now() - 172800000).toISOString(), description: 'Manual Save', status: 'completed' },
      { id: 4, type: 'deposit', amount: 25000, date: new Date(Date.now() - 259200000).toISOString(), description: 'MTN Mobile Money Deposit', status: 'completed' },
      { id: 5, type: 'withdrawal', amount: 15000, date: new Date(Date.now() - 345600000).toISOString(), description: 'Emergency Withdrawal', status: 'completed' }
    ],
    categories: [
      { name: 'Emergency Fund', target: 100000, saved: 45000, color: 'bg-red-500' },
      { name: 'Vacation', target: 80000, saved: 32000, color: 'bg-blue-500' },
      { name: 'New Phone', target: 50000, saved: 48000, color: 'bg-green-500' },
      { name: 'Investment', target: 200000, saved: 55000, color: 'bg-purple-500' }
    ]
  })

  // Enhanced authentication data
  const [authData, setAuthData] = useState({
    isAuthenticated: false,
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
    errors: {
      email: '',
      password: '',
      confirmPassword: '',
      login: ''
    }
  })

  // Enhanced payment data with better validation
  const [paymentData, setPaymentData] = useState({
    provider: '',
    phoneNumber: '',
    amount: '',
    pin: '',
    isProcessing: false,
    errors: {
      provider: '',
      phoneNumber: '',
      amount: '',
      pin: ''
    },
    connectedAccounts: [
      { id: 1, provider: 'MTN Mobile Money', phone: '*****1234', isActive: true, balance: 85000 },
      { id: 2, provider: 'Airtel Money', phone: '*****5678', isActive: false, balance: 42000 }
    ]
  })

  // Enhanced notifications data
  const [notificationsData, setNotificationsData] = useState({
    notifications: [
      {
        id: 1,
        title: "🎉 Monthly Goal Achieved!",
        message: "Congratulations! You've reached 90% of your monthly savings goal. Only RWF 5,000 to go!",
        type: "achievement" as const,
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        read: false,
        priority: 'high' as const
      },
      {
        id: 2,
        title: "💰 Auto-Save Successful",
        message: "RWF 5,000 has been automatically saved to your account from MTN Mobile Money.",
        type: "transaction" as const,
        timestamp: new Date(Date.now() - 7200000).toISOString(),
        read: false,
        priority: 'medium' as const
      },
      {
        id: 3,
        title: "⏰ Monthly Check-in Reminder",
        message: "It's time for your monthly savings review! Update your goals and celebrate your progress.",
        type: "reminder" as const,
        timestamp: new Date(Date.now() - 86400000).toISOString(),
        read: true,
        priority: 'low' as const
      },
      {
        id: 4,
        title: "💡 Smart Savings Tip",
        message: "Try the 50/30/20 rule: 50% needs, 30% wants, 20% savings. You're currently saving 18% - excellent!",
        type: "tip" as const,
        timestamp: new Date(Date.now() - 172800000).toISOString(),
        read: true,
        priority: 'low' as const
      },
      {
        id: 5,
        title: "⚠️ Low Balance Alert",
        message: "Your account balance is running low (RWF 15,000). Consider adding funds to continue auto-saving.",
        type: "alert" as const,
        timestamp: new Date(Date.now() - 259200000).toISOString(),
        read: false,
        priority: 'high' as const
      }
    ],
    unreadCount: 3
  })

  // Enhanced settings data
  const [settingsData, setSettingsData] = useState({
    profile: {
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      dateOfBirth: '1995-06-15',
      occupation: 'Software Developer',
      monthlyIncome: 250000,
      currency: 'RWF',
      profilePicture: null,
      address: 'Kigali, Rwanda',
      emergencyContact: '+250788654321',
    },
    notifications: {
      pushNotifications: true,
      emailNotifications: true,
      smsNotifications: false,
      savingsReminders: true,
      goalAchievements: true,
      transactionAlerts: true,
      weeklyReports: true,
      marketingEmails: false,
      budgetAlerts: true,
      lowBalanceAlerts: true,
      securityAlerts: true,
      socialUpdates: false,
      promotionalOffers: false,
      reminderTime: '09:00',
      weeklyReportDay: 'sunday',
      quietHours: {
        enabled: true,
        start: '22:00',
        end: '07:00',
      },
    },
    security: {
      twoFactorAuth: false,
      biometricLogin: true,
      loginAlerts: true,
      autoLogout: 30,
      sessionTimeout: true,
      deviceTrust: true,
      passwordExpiry: 90,
      loginHistory: true,
      ipWhitelist: false,
      dataEncryption: true,
    },
    preferences: {
      language: 'en',
      theme: 'light',
      autoSaveFrequency: 'daily',
      defaultSaveAmount: 5000,
      budgetAlerts: true,
      savingsGoalReminders: true,
      currency: 'RWF',
      dateFormat: 'DD/MM/YYYY',
      numberFormat: 'comma',
      chartType: 'line',
      dashboardLayout: 'default',
      animationsEnabled: true,
      soundEffects: true,
      hapticFeedback: true,
      dataSync: true,
      offlineMode: true,
    },
    privacy: {
      profileVisibility: 'private',
      shareProgress: false,
      analyticsOptIn: true,
      marketingOptIn: false,
      dataRetention: 365,
      cookiePreferences: {
        necessary: true,
        analytics: true,
        marketing: false,
        personalization: true,
      },
    },
    backup: {
      autoBackup: true,
      backupFrequency: 'weekly',
      cloudSync: true,
      localBackup: true,
      backupEncryption: true,
      lastBackup: new Date().toISOString(),
    },
  })

  // Toast notification system
  const showToastMessage = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    setToastMessage(message)
    setToastType(type)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  // Auto-save functionality with realistic timing
  useEffect(() => {
    if (currentStep === 'dashboard' && authData.isAuthenticated) {
      const autoSaveInterval = setInterval(() => {
        if (savingsData.balance >= savingsData.autoSaveAmount) {
          handleAutoSave()
        }
      }, 24 * 60 * 60 * 1000) // Daily auto-save

      return () => clearInterval(autoSaveInterval)
    }
  }, [currentStep, authData.isAuthenticated])

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email) return 'Email is required'
    if (!emailRegex.test(email)) return 'Please enter a valid email address'
    return ''
  }

  const validatePassword = (password: string) => {
    if (!password) return 'Password is required'
    if (password.length < 8) return 'Password must be at least 8 characters long'
    if (!/(?=.*[a-z])/.test(password)) return 'Password must contain at least one lowercase letter'
    if (!/(?=.*[A-Z])/.test(password)) return 'Password must contain at least one uppercase letter'
    if (!/(?=.*\d)/.test(password)) return 'Password must contain at least one number'
    return ''
  }

  const validateConfirmPassword = (password: string, confirmPassword: string) => {
    if (!confirmPassword) return 'Please confirm your password'
    if (password !== confirmPassword) return 'Passwords do not match'
    return ''
  }

  // Enhanced authentication functions
  const handleEmailChange = (email: string) => {
    const emailError = validateEmail(email)
    setAuthData(prev => ({
      ...prev,
      email,
      errors: { ...prev.errors, email: emailError, login: '' }
    }))
  }

  const handlePasswordChange = (password: string) => {
    const passwordError = validatePassword(password)
    const confirmPasswordError = authData.confirmPassword 
      ? validateConfirmPassword(password, authData.confirmPassword)
      : ''
    
    setAuthData(prev => ({
      ...prev,
      password,
      errors: { 
        ...prev.errors, 
        password: passwordError,
        confirmPassword: confirmPasswordError,
        login: ''
      }
    }))
  }

  const handleConfirmPasswordChange = (confirmPassword: string) => {
    const confirmPasswordError = validateConfirmPassword(authData.password, confirmPassword)
    setAuthData(prev => ({
      ...prev,
      confirmPassword,
      errors: { ...prev.errors, confirmPassword: confirmPasswordError }
    }))
  }

  const handleLogin = () => {
    const emailError = validateEmail(authData.email)
    const passwordError = authData.password ? '' : 'Password is required'
    
    if (emailError || passwordError) {
      setAuthData(prev => ({
        ...prev,
        errors: { ...prev.errors, email: emailError, password: passwordError }
      }))
      return
    }

    // Simulate authentication
    if (authData.email === 'demo@savesmart.com' && authData.password === 'Demo123!') {
      setAuthData(prev => ({ ...prev, isAuthenticated: true, errors: { ...prev.errors, login: '' } }))
      setUserData(prev => ({ ...prev, lastLogin: new Date().toISOString() }))
      setCurrentStep('dashboard')
      showToastMessage('Welcome back! Login successful.', 'success')
    } else {
      setAuthData(prev => ({
        ...prev,
        errors: { ...prev.errors, login: 'Invalid email or password. Try demo@savesmart.com / Demo123!' }
      }))
    }
  }

  const handleLogout = () => {
    setAuthData({
      isAuthenticated: false,
      email: '',
      password: '',
      confirmPassword: '',
      rememberMe: false,
      errors: {
        email: '',
        password: '',
        confirmPassword: '',
        login: ''
      }
    })
    setCurrentStep('welcome')
    showToastMessage('You have been logged out successfully.', 'info')
  }

  // Enhanced savings functions
  const handleAutoSave = () => {
    const autoSaveAmount = savingsData.autoSaveAmount
    if (savingsData.balance >= autoSaveAmount) {
      setSavingsData(prev => ({
        ...prev,
        balance: prev.balance - autoSaveAmount,
        currentSavings: prev.currentSavings + autoSaveAmount,
        totalSaved: prev.totalSaved + autoSaveAmount,
        lastAutoSave: new Date().toISOString(),
        goalProgress: Math.min(100, ((prev.currentSavings + autoSaveAmount) / prev.monthlyGoal) * 100),
        transactions: [
          {
            id: Date.now(),
            type: 'auto_save',
            amount: autoSaveAmount,
            date: new Date().toISOString(),
            description: 'Auto Save Transfer',
            status: 'completed'
          },
          ...prev.transactions
        ]
      }))
      
      // Add achievement notification if goal reached
      if (((savingsData.currentSavings + autoSaveAmount) / savingsData.monthlyGoal) >= 1) {
        addNotification({
          title: "🎉 Monthly Goal Achieved!",
          message: "Congratulations! You've reached your monthly savings goal!",
          type: "achievement",
          timestamp: new Date().toISOString(),
          read: false,
          priority: 'high'
        })
      }
      
      showToastMessage(`Auto-saved RWF ${autoSaveAmount.toLocaleString()}!`, 'success')
    } else {
      showToastMessage('Insufficient balance for auto-save. Please add funds.', 'error')
    }
  }

  const handleManualSave = (amount: number) => {
    if (savingsData.balance >= amount) {
      setSavingsData(prev => ({
        ...prev,
        balance: prev.balance - amount,
        currentSavings: prev.currentSavings + amount,
        totalSaved: prev.totalSaved + amount,
        goalProgress: Math.min(100, ((prev.currentSavings + amount) / prev.monthlyGoal) * 100),
        transactions: [
          {
            id: Date.now(),
            type: 'manual_save',
            amount: amount,
            date: new Date().toISOString(),
            description: 'Manual Save Transfer',
            status: 'completed'
          },
          ...prev.transactions
        ]
      }))
      showToastMessage(`Successfully saved RWF ${amount.toLocaleString()}!`, 'success')
    } else {
      showToastMessage('Insufficient balance. Please add funds first.', 'error')
    }
  }

  // Enhanced notification functions
  const markNotificationAsRead = (id: number) => {
    setNotificationsData(prev => ({
      ...prev,
      notifications: prev.notifications.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      ),
      unreadCount: prev.unreadCount - (prev.notifications.find(n => n.id === id && !n.read) ? 1 : 0)
    }))
  }

  const markAllNotificationsAsRead = () => {
    setNotificationsData(prev => ({
      ...prev,
      notifications: prev.notifications.map(notif => ({ ...notif, read: true })),
      unreadCount: 0
    }))
    showToastMessage('All notifications marked as read.', 'success')
  }

  const deleteNotification = (id: number) => {
    setNotificationsData(prev => ({
      ...prev,
      notifications: prev.notifications.filter(notif => notif.id !== id),
      unreadCount: prev.unreadCount - (prev.notifications.find(n => n.id === id && !n.read) ? 1 : 0)
    }))
    showToastMessage('Notification deleted.', 'info')
  }

  const addNotification = (notification: Omit<typeof notificationsData.notifications[0], 'id'>) => {
    setNotificationsData(prev => ({
      ...prev,
      notifications: [{ ...notification, id: Date.now() }, ...prev.notifications],
      unreadCount: prev.unreadCount + 1
    }))
  }

  // Enhanced settings functions
  const updateProfileSettings = (field: string, value: any) => {
    setSettingsData(prev => ({
      ...prev,
      profile: { ...prev.profile, [field]: value }
    }))
    showToastMessage('Profile updated successfully.', 'success')
  }

  const updateNotificationSettings = (field: string, value: any) => {
    setSettingsData(prev => ({
      ...prev,
      notifications: { ...prev.notifications, [field]: value }
    }))
    showToastMessage('Notification preferences updated.', 'success')
  }

  const updateSecuritySettings = (field: string, value: any) => {
    setSettingsData(prev => ({
      ...prev,
      security: { ...prev.security, [field]: value }
    }))
    showToastMessage('Security settings updated.', 'success')
  }

  const updatePreferenceSettings = (field: string, value: any) => {
    setSettingsData(prev => ({
      ...prev,
      preferences: { ...prev.preferences, [field]: value }
    }))
    showToastMessage('Preferences updated.', 'success')
  }

  const updatePrivacySettings = (field: string, value: any) => {
    setSettingsData(prev => ({
      ...prev,
      privacy: { ...prev.privacy, [field]: value }
    }))
    showToastMessage('Privacy settings updated.', 'success')
  }

  const updateBackupSettings = (field: string, value: any) => {
    setSettingsData(prev => ({
      ...prev,
      backup: { ...prev.backup, [field]: value }
    }))
    showToastMessage('Backup settings updated.', 'success')
  }

  // Enhanced payment functions with better validation
  const validatePhoneNumber = (phone: string, provider: string) => {
    if (!phone) return 'Phone number is required'
    
    const cleanPhone = phone.replace(/[\s\-()]/g, '')
    const rwandaPhoneRegex = /^(\+?250|0)?[7][0-9]{8}$/
    
    if (!rwandaPhoneRegex.test(cleanPhone)) {
      return 'Please enter a valid Rwandan phone number (e.g., 0788123456)'
    }
    
    if (provider === 'mtn') {
      const mtnPrefixes = ['078', '079']
      const prefix = cleanPhone.slice(-9, -6)
      if (!mtnPrefixes.includes(prefix)) {
        return 'MTN numbers should start with 078 or 079'
      }
    } else if (provider === 'airtel') {
      const airtelPrefixes = ['073', '075']
      const prefix = cleanPhone.slice(-9, -6)
      if (!airtelPrefixes.includes(prefix)) {
        return 'Airtel numbers should start with 073 or 075'
      }
    }
    
    return ''
  }

  const validateAmount = (amount: string) => {
    if (!amount) return 'Amount is required'
    
    const numAmount = Number(amount)
    if (isNaN(numAmount) || numAmount <= 0) {
      return 'Please enter a valid amount'
    }
    
    if (numAmount < 1000) {
      return 'Minimum amount is RWF 1,000'
    }
    
    if (numAmount > 500000) {
      return 'Maximum amount is RWF 500,000 per transaction'
    }
    
    return ''
  }

  const validatePin = (pin: string) => {
    if (!pin) return 'Mobile money PIN is required'
    
    if (pin.length < 4) {
      return 'PIN must be at least 4 digits'
    }
    
    if (pin.length > 6) {
      return 'PIN must be no more than 6 digits'
    }
    
    if (!/^\d+$/.test(pin)) {
      return 'PIN must contain only numbers'
    }
    
    return ''
  }

  const validateProvider = (provider: string) => {
    if (!provider) return 'Please select a mobile money provider'
    return ''
  }

  const handlePaymentInputChange = (field: string, value: string) => {
    let error = ''
    
    switch (field) {
      case 'provider':
        error = validateProvider(value)
        if (paymentData.phoneNumber) {
          const phoneError = validatePhoneNumber(paymentData.phoneNumber, value)
          setPaymentData(prev => ({
            ...prev,
            [field]: value,
            errors: { ...prev.errors, [field]: error, phoneNumber: phoneError }
          }))
          return
        }
        break
      case 'phoneNumber':
        error = validatePhoneNumber(value, paymentData.provider)
        break
      case 'amount':
        error = validateAmount(value)
        break
      case 'pin':
        error = validatePin(value)
        break
    }
    
    setPaymentData(prev => ({
      ...prev,
      [field]: value,
      errors: { ...prev.errors, [field]: error }
    }))
  }

  const isPaymentFormValid = () => {
    return !paymentData.errors.provider && 
           !paymentData.errors.phoneNumber && 
           !paymentData.errors.amount && 
           !paymentData.errors.pin &&
           paymentData.provider && 
           paymentData.phoneNumber && 
           paymentData.amount && 
           paymentData.pin
  }

  const handleMobileMoneyPayment = async () => {
    const providerError = validateProvider(paymentData.provider)
    const phoneError = validatePhoneNumber(paymentData.phoneNumber, paymentData.provider)
    const amountError = validateAmount(paymentData.amount)
    const pinError = validatePin(paymentData.pin)
    
    if (providerError || phoneError || amountError || pinError) {
      setPaymentData(prev => ({
        ...prev,
        errors: {
          provider: providerError,
          phoneNumber: phoneError,
          amount: amountError,
          pin: pinError
        }
      }))
      return
    }
    
    setPaymentData(prev => ({ ...prev, isProcessing: true }))
    
    // Simulate payment processing
    setTimeout(() => {
      const amount = Number(paymentData.amount)
      setSavingsData(prev => ({
        ...prev,
        balance: prev.balance + amount,
        transactions: [
          {
            id: Date.now(),
            type: 'deposit',
            amount: amount,
            date: new Date().toISOString(),
            description: `${paymentData.provider.toUpperCase()} Mobile Money Deposit`,
            status: 'completed'
          },
          ...prev.transactions
        ]
      }))
      
      setPaymentData(prev => ({ 
        ...prev, 
        isProcessing: false,
        amount: '',
        pin: '',
        phoneNumber: '',
        provider: '',
        errors: {
          provider: '',
          phoneNumber: '',
          amount: '',
          pin: ''
        }
      }))
      
      addNotification({
        title: "💰 Deposit Successful",
        message: `RWF ${amount.toLocaleString()} has been added to your account.`,
        type: "transaction",
        timestamp: new Date().toISOString(),
        read: false,
        priority: 'medium'
      })
      
      setCurrentStep('dashboard')
      showToastMessage(`Successfully added RWF ${amount.toLocaleString()} to your account!`, 'success')
    }, 3000)
  }

  // Enhanced dashboard with better UX
  const renderDashboard = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <PiggyBank className="h-8 w-8 text-green-600" />
              <div>
                <h1 className="text-xl font-bold">SaveSmart</h1>
                <p className="text-sm text-gray-600">Welcome back, {userData.name.split(' ')[0]}!</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentStep("notifications")}
                className="relative"
              >
                <Bell className="h-4 w-4" />
                {notificationsData.unreadCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                  >
                    {notificationsData.unreadCount > 9 ? "9+" : notificationsData.unreadCount}
                  </Badge>
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentStep("settings")}
              >
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Enhanced Progress Overview */}
        <Card className="bg-gradient-to-r from-green-50 to-blue-50">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-6">
              {/* Monthly Progress Circle */}
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-gray-200"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      strokeDashoffset={`${2 * Math.PI * 56 * (1 - savingsData.goalProgress / 100)}`}
                      className="text-green-600"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">{Math.round(savingsData.goalProgress)}%</p>
                      <p className="text-xs text-gray-600">Monthly</p>
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900">This Month</h3>
                <p className="text-2xl font-bold text-green-600">RWF {savingsData.currentSavings.toLocaleString()}</p>
                <p className="text-sm text-gray-600">of RWF {savingsData.monthlyGoal.toLocaleString()}</p>
              </div>

              {/* Key Metrics */}
              <div className="space-y-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Account Balance</span>
                    <Wallet className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-xl font-bold text-blue-600">RWF {savingsData.balance.toLocaleString()}</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Total Saved</span>
                    <PiggyBank className="h-4 w-4 text-green-600" />
                  </div>
                  <p className="text-xl font-bold text-green-600">RWF {savingsData.totalSaved.toLocaleString()}</p>
                </div>
              </div>

              {/* Savings Stats */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Savings Rate</span>
                  <Badge variant="secondary">{savingsData.savingsRate}%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Saving Streak</span>
                  <Badge variant="outline">{savingsData.streakDays} days</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Auto Save</span>
                  <span className="text-sm font-medium">RWF {savingsData.autoSaveAmount.toLocaleString()}/day</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Last Save</span>
                  <span className="text-xs text-gray-500">
                    {formatDistanceToNow(new Date(savingsData.lastAutoSave), { addSuffix: true })}
                  </span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                <h4 className="font-semibold">Quick Actions</h4>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={handleAutoSave}
                  disabled={savingsData.balance < savingsData.autoSaveAmount}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Save Now (RWF {savingsData.autoSaveAmount.toLocaleString()})
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleManualSave(10000)}
                  disabled={savingsData.balance < 10000}
                >
                  Save RWF 10,000
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setCurrentStep('add-funds')}
                >
                  <Smartphone className="h-4 w-4 mr-2" />
                  Add Funds
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Low Balance Alert */}
        {savingsData.balance < savingsData.autoSaveAmount * 3 && (
          <Card className="border-yellow-200 bg-yellow-50">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-yellow-800">Low Balance Alert</p>
                  <p className="text-sm text-yellow-700">
                    Your balance is getting low. Add funds to continue auto-saving.
                  </p>
                </div>
                <Button 
                  size="sm"
                  onClick={() => setCurrentStep('add-funds')}
                  className="bg-yellow-600 hover:bg-yellow-700"
                >
                  Add Funds
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Enhanced Tabs */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {savingsData.transactions.slice(0, 5).map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          transaction.type === 'deposit' ? 'bg-blue-600' : 
                          transaction.type === 'withdrawal' ? 'bg-red-600' : 'bg-green-600'
                        }`}>
                          {transaction.type === 'deposit' ? 
                            <Smartphone className="h-4 w-4 text-white" /> :
                            transaction.type === 'withdrawal' ?
                            <ArrowRight className="h-4 w-4 text-white" /> :
                            <Plus className="h-4 w-4 text-white" />
                          }
                        </div>
                        <div>
                          <p className="font-medium">{transaction.description}</p>
                          <p className="text-sm text-gray-600">
                            {new Date(transaction.date).toLocaleDateString()} at {new Date(transaction.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`font-semibold ${
                          transaction.type === 'deposit' ? 'text-blue-600' : 
                          transaction.type === 'withdrawal' ? 'text-red-600' : 'text-green-600'
                        }`}>
                          {transaction.type === 'withdrawal' ? '-' : '+'}RWF {transaction.amount.toLocaleString()}
                        </span>
                        <p className="text-xs text-gray-500 capitalize">{transaction.status}</p>
                      </div>
                    </div>
                  ))}
                  
                  {savingsData.transactions.length === 0 && (
                    <div className="text-center py-4 text-gray-500">
                      <p>No recent activity</p>
                      <p className="text-sm">Start saving to see your progress here!</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Savings Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Personalized Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="font-medium text-green-800">💡 Great Progress!</p>
                      <p className="text-sm text-green-700">
                        You're saving {savingsData.savingsRate}% of your income. Consider increasing to 20% for faster goal achievement.
                      </p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="font-medium text-blue-800">🎯 Goal Insight</p>
                      <p className="text-sm text-blue-700">
                        At your current rate, you'll reach your yearly goal of RWF {(savingsData.yearlyGoal / 1000)}K in {Math.ceil((savingsData.yearlyGoal - savingsData.totalSaved) / (savingsData.currentSavings * 12))} months.
                      </p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <p className="font-medium text-purple-800">🏆 Challenge</p>
                      <p className="text-sm text-purple-700">
                        Try the "Round-up" challenge - round up purchases and save the difference!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="goals" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {savingsData.categories.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{category.name}</span>
                      <Badge variant="outline">
                        {Math.round((category.saved / category.target) * 100)}%
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>RWF {category.saved.toLocaleString()}</span>
                        <span>RWF {category.target.toLocaleString()}</span>
                      </div>
                      <Progress 
                        value={(category.saved / category.target) * 100} 
                        className="h-2"
                      />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">
                          RWF {(category.target - category.saved).toLocaleString()} remaining
                        </span>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleManualSave(5000)}
                          disabled={savingsData.balance < 5000}
                        >
                          Add RWF 5K
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="transactions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {savingsData.transactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.type === 'deposit' ? 'bg-blue-100' : 
                          transaction.type === 'withdrawal' ? 'bg-red-100' : 'bg-green-100'
                        }`}>
                          {transaction.type === 'deposit' ? 
                            <Smartphone className={`h-5 w-5 ${transaction.type === 'deposit' ? 'text-blue-600' : 'text-green-600'}`} /> :
                            transaction.type === 'withdrawal' ?
                            <ArrowRight className="h-5 w-5 text-red-600" /> :
                            <Plus className="h-5 w-5 text-green-600" />
                          }
                        </div>
                        <div>
                          <p className="font-medium">{transaction.description}</p>
                          <p className="text-sm text-gray-600">
                            {new Date(transaction.date).toLocaleDateString()} • {new Date(transaction.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-semibold ${
                          transaction.type === 'deposit' ? 'text-blue-600' : 
                          transaction.type === 'withdrawal' ? 'text-red-600' : 'text-green-600'
                        }`}>
                          {transaction.type === 'withdrawal' ? '-' : '+'}RWF {transaction.amount.toLocaleString()}
                        </p>
                        <Badge variant="outline" className="text-xs">
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Savings Velocity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-600">
                      RWF {Math.round(savingsData.totalSaved / 30).toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">Average per day</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Goal Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-600">
                      {Math.ceil((savingsData.monthlyGoal - savingsData.currentSavings) / (savingsData.autoSaveAmount * 30))}
                    </p>
                    <p className="text-sm text-gray-600">Days to monthly goal</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Efficiency Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-purple-600">
                      {Math.round((savingsData.savingsRate / 20) * 100)}%
                    </p>
                    <p className="text-sm text-gray-600">Savings efficiency</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 right-4 z-50">
          <div className={`p-4 rounded-lg shadow-lg ${
            toastType === 'success' ? 'bg-green-600 text-white' :
            toastType === 'error' ? 'bg-red-600 text-white' :
            'bg-blue-600 text-white'
          }`}>
            <p className="font-medium">{toastMessage}</p>
          </div>
        </div>
      )}
    </div>
  )

  // Keep all other render functions (welcome, login, etc.) but enhance them with better UX
  const renderWelcomeScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-8 text-center">
          <div className="mb-8">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <PiggyBank className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to SaveSmart!</h1>
            <p className="text-gray-600">
              Build a habit of saving with smart budgeting, automatic transfers, and visual motivation.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-3 text-left">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="text-sm text-gray-700">Set up your budget in under 2 minutes</span>
            </div>
            <div className="flex items-center space-x-3 text-left">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="text-sm text-gray-700">Automatic savings with mobile money</span>
            </div>
            <div className="flex items-center space-x-3 text-left">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="text-sm text-gray-700">Visual progress tracking and motivation</span>
            </div>
          </div>

          <div className="space-y-3">
            <Button 
              onClick={() => setCurrentStep('create-account')} 
              className="w-full bg-green-600 hover:bg-green-700"
            >
              Create Account <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline"
              onClick={() => setCurrentStep('login')} 
              className="w-full"
            >
              Login to Existing Account
            </Button>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Free to start • No credit card required • Works offline
          </p>
        </CardContent>
      </Card>
    </div>
  )

  const renderLoginScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <PiggyBank className="h-8 w-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl">Welcome Back!</CardTitle>
          <p className="text-gray-600">Login to continue your savings journey</p>
        </CardHeader>
        
        {/* Demo credentials info */}
        <div className="mx-6 mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800 font-medium">
            🎯 Demo Credentials
          </p>
          <p className="text-xs text-blue-700">
            Email: demo@savesmart.com | Password: Demo123!
          </p>
        </div>

        <CardContent className="space-y-6">
          {authData.errors.login && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-800">{authData.errors.login}</p>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="login-email">Email Address</Label>
            <Input
              id="login-email"
              type="email"
              placeholder="Enter your email"
              value={authData.email}
              onChange={(e) => handleEmailChange(e.target.value)}
              className={authData.errors.email ? 'border-red-500 focus:border-red-500' : ''}
            />
            {authData.errors.email && (
              <p className="text-sm text-red-600">{authData.errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="login-password">Password</Label>
            <Input
              id="login-password"
              type="password"
              placeholder="Enter your password"
              value={authData.password}
              onChange={(e) => setAuthData({...authData, password: e.target.value, errors: {...authData.errors, login: ''}})}
              className={authData.errors.password ? 'border-red-500 focus:border-red-500' : ''}
            />
            {authData.errors.password && (
              <p className="text-sm text-red-600">{authData.errors.password}</p>
            )}
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                className="rounded" 
                checked={authData.rememberMe}
                onChange={(e) => setAuthData({...authData, rememberMe: e.target.checked})}
              />
              <span className="text-gray-600">Remember me</span>
            </label>
            <Button variant="link" className="p-0 h-auto text-green-600">
              Forgot password?
            </Button>
          </div>

          <Button 
            onClick={handleLogin}
            className="w-full bg-green-600 hover:bg-green-700"
            disabled={!authData.email || !authData.password || !!authData.errors.email}
          >
            Login to Dashboard
          </Button>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Button 
                variant="link" 
                className="p-0 h-auto text-green-600"
                onClick={() => {
                  setAuthData(prev => ({ ...prev, errors: { email: '', password: '', confirmPassword: '', login: '' } }))
                  setCurrentStep('create-account')
                }}
              >
                Create one here
              </Button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  // Enhanced Settings Screen Component
  const SettingsScreen = () => {
    const [activeTab, setActiveTab] = useState('profile')
    const [unsavedChanges, setUnsavedChanges] = useState(false)

    const handleSave = () => {
      setUnsavedChanges(false)
      showToastMessage('Settings saved successfully!', 'success')
    }

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Button variant="ghost" size="sm" onClick={() => setCurrentStep('dashboard')}>
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <div>
                  <h1 className="text-xl font-bold">Settings</h1>
                  <p className="text-sm text-gray-600">Manage your account and preferences</p>
                </div>
              </div>
              {unsavedChanges && (
                <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Full Name</Label>
                      <Input
                        value={settingsData.profile.name}
                        onChange={(e) => {
                          updateProfileSettings('name', e.target.value)
                          setUnsavedChanges(true)
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Email Address</Label>
                      <Input
                        type="email"
                        value={settingsData.profile.email}
                        onChange={(e) => {
                          updateProfileSettings('email', e.target.value)
                          setUnsavedChanges(true)
                        }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Add other tabs content here */}
          </Tabs>
        </div>
      </div>
    )
  }

  // Enhanced Notifications Screen Component
  const NotificationsScreen = () => {
    const [filter, setFilter] = useState<string>('all')

    const filteredNotifications = notificationsData.notifications.filter(notification => {
      if (filter === 'all') return true
      if (filter === 'unread') return !notification.read
      return notification.type === filter
    })

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Button variant="ghost" size="sm" onClick={() => setCurrentStep('dashboard')}>
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <div>
                  <h1 className="text-xl font-bold">Notifications</h1>
                  <p className="text-sm text-gray-600">
                    {notificationsData.unreadCount} unread notifications
                  </p>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={markAllNotificationsAsRead}
                disabled={notificationsData.unreadCount === 0}
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                Mark All Read
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-4 space-y-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Filter className="h-4 w-4 text-gray-600" />
                  <span className="text-sm font-medium">Filter by:</span>
                </div>
                <Select value={filter} onValueChange={setFilter}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Notifications</SelectItem>
                    <SelectItem value="unread">Unread Only</SelectItem>
                    <SelectItem value="achievement">Achievements</SelectItem>
                    <SelectItem value="transaction">Transactions</SelectItem>
                    <SelectItem value="reminder">Reminders</SelectItem>
                    <SelectItem value="tip">Tips</SelectItem>
                    <SelectItem value="alert">Alerts</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-3">
            {filteredNotifications.map((notification) => (
              <Card
                key={notification.id}
                className={`cursor-pointer transition-colors hover:shadow-md ${
                  !notification.read ? 'bg-blue-50 border-blue-200' : 'bg-white'
                }`}
                onClick={() => markNotificationAsRead(notification.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-medium">{notification.title}</h3>
                        {!notification.read && (
                          <Badge variant="secondary" className="text-xs">New</Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                      <p className="text-xs text-gray-500">
                        {formatDistanceToNow(new Date(notification.timestamp), { addSuffix: true })}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        deleteNotification(notification.id)
                      }}
                      className="text-gray-400 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Render the appropriate screen based on current step
  switch (currentStep) {
    case 'welcome':
      return renderWelcomeScreen()
    case 'login':
      return renderLoginScreen()
    case 'settings':
      return <SettingsScreen />
    case 'notifications':
      return <NotificationsScreen />
    default:
      return renderDashboard()
  }
}
