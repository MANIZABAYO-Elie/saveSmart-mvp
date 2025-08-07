"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, User, Bell, Shield, Palette, Globe, Smartphone, Mail, Lock, Eye, EyeOff, Save, AlertTriangle, Download, CheckCircle } from 'lucide-react'
import { useState } from "react"

interface SettingsScreenProps {
  settingsData: any
  updateProfileSettings: (field: string, value: any) => void
  updateNotificationSettings: (field: string, value: any) => void
  updateSecuritySettings: (field: string, value: any) => void
  updatePreferenceSettings: (field: string, value: any) => void
  updatePrivacySettings: (field: string, value: any) => void
  updateBackupSettings: (field: string, value: any) => void
  onBack: () => void
}

export default function SettingsScreen({ 
  settingsData, 
  updateProfileSettings, 
  updateNotificationSettings, 
  updateSecuritySettings, 
  updatePreferenceSettings,
  updatePrivacySettings,
  updateBackupSettings,
  onBack 
}: SettingsScreenProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [activeTab, setActiveTab] = useState('profile')
  const [unsavedChanges, setUnsavedChanges] = useState(false)

  const handleSave = () => {
    setUnsavedChanges(false)
    // Simulate saving
    setTimeout(() => {
      alert('Settings saved successfully!')
    }, 500)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" onClick={onBack}>
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
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="profile" className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center">
              <Shield className="h-4 w-4 mr-2" />
              Security
            </TabsTrigger>
            <TabsTrigger value="preferences" className="flex items-center">
              <Palette className="h-4 w-4 mr-2" />
              Preferences
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex items-center">
              <Globe className="h-4 w-4 mr-2" />
              Privacy
            </TabsTrigger>
            <TabsTrigger value="backup" className="flex items-center">
              <Save className="h-4 w-4 mr-2" />
              Backup
            </TabsTrigger>
          </TabsList>

          {/* Profile Settings */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <p className="text-sm text-gray-600">Update your personal details and contact information</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={settingsData.profile.name}
                      onChange={(e) => {
                        updateProfileSettings('name', e.target.value)
                        setUnsavedChanges(true)
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={settingsData.profile.email}
                      onChange={(e) => {
                        updateProfileSettings('email', e.target.value)
                        setUnsavedChanges(true)
                      }}
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={settingsData.profile.phone}
                      onChange={(e) => {
                        updateProfileSettings('phone', e.target.value)
                        setUnsavedChanges(true)
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input
                      id="dob"
                      type="date"
                      value={settingsData.profile.dateOfBirth}
                      onChange={(e) => {
                        updateProfileSettings('dateOfBirth', e.target.value)
                        setUnsavedChanges(true)
                      }}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="occupation">Occupation</Label>
                    <Input
                      id="occupation"
                      value={settingsData.profile.occupation}
                      onChange={(e) => {
                        updateProfileSettings('occupation', e.target.value)
                        setUnsavedChanges(true)
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="income">Monthly Income (RWF)</Label>
                    <Input
                      id="income"
                      type="number"
                      value={settingsData.profile.monthlyIncome}
                      onChange={(e) => {
                        updateProfileSettings('monthlyIncome', Number(e.target.value))
                        setUnsavedChanges(true)
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currency">Preferred Currency</Label>
                  <Select 
                    value={settingsData.profile.currency} 
                    onValueChange={(value) => {
                      updateProfileSettings('currency', value)
                      setUnsavedChanges(true)
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="RWF">Rwandan Franc (RWF)</SelectItem>
                      <SelectItem value="USD">US Dollar (USD)</SelectItem>
                      <SelectItem value="EUR">Euro (EUR)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notification Settings */}
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <p className="text-sm text-gray-600">Choose how you want to receive notifications</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Delivery Methods</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Smartphone className="h-5 w-5 text-gray-600" />
                        <div>
                          <p className="font-medium">Push Notifications</p>
                          <p className="text-sm text-gray-600">Receive notifications on your device</p>
                        </div>
                      </div>
                      <Switch
                        checked={settingsData.notifications.pushNotifications}
                        onCheckedChange={(checked) => updateNotificationSettings('pushNotifications', checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-gray-600" />
                        <div>
                          <p className="font-medium">Email Notifications</p>
                          <p className="text-sm text-gray-600">Receive notifications via email</p>
                        </div>
                      </div>
                      <Switch
                        checked={settingsData.notifications.emailNotifications}
                        onCheckedChange={(checked) => updateNotificationSettings('emailNotifications', checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Smartphone className="h-5 w-5 text-gray-600" />
                        <div>
                          <p className="font-medium">SMS Notifications</p>
                          <p className="text-sm text-gray-600">Receive notifications via text message</p>
                          <Badge variant="secondary" className="text-xs">Premium</Badge>
                        </div>
                      </div>
                      <Switch
                        checked={settingsData.notifications.smsNotifications}
                        onCheckedChange={(checked) => updateNotificationSettings('smsNotifications', checked)}
                        disabled
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Notification Types</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Savings Reminders</p>
                        <p className="text-sm text-gray-600">Daily reminders to save money</p>
                      </div>
                      <Switch
                        checked={settingsData.notifications.savingsReminders}
                        onCheckedChange={(checked) => updateNotificationSettings('savingsReminders', checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Goal Achievements</p>
                        <p className="text-sm text-gray-600">Celebrate when you reach milestones</p>
                      </div>
                      <Switch
                        checked={settingsData.notifications.goalAchievements}
                        onCheckedChange={(checked) => updateNotificationSettings('goalAchievements', checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Transaction Alerts</p>
                        <p className="text-sm text-gray-600">Get notified of all transactions</p>
                      </div>
                      <Switch
                        checked={settingsData.notifications.transactionAlerts}
                        onCheckedChange={(checked) => updateNotificationSettings('transactionAlerts', checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Weekly Reports</p>
                        <p className="text-sm text-gray-600">Weekly savings progress summary</p>
                      </div>
                      <Switch
                        checked={settingsData.notifications.weeklyReports}
                        onCheckedChange={(checked) => updateNotificationSettings('weeklyReports', checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Marketing Emails</p>
                        <p className="text-sm text-gray-600">Tips, news, and product updates</p>
                      </div>
                      <Switch
                        checked={settingsData.notifications.marketingEmails}
                        onCheckedChange={(checked) => updateNotificationSettings('marketingEmails', checked)}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Security & Privacy</CardTitle>
                <p className="text-sm text-gray-600">Keep your account secure</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Authentication</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Two-Factor Authentication</p>
                        <p className="text-sm text-gray-600">Add an extra layer of security</p>
                        <Badge variant="outline" className="text-xs mt-1">Recommended</Badge>
                      </div>
                      <Switch
                        checked={settingsData.security.twoFactorAuth}
                        onCheckedChange={(checked) => updateSecuritySettings('twoFactorAuth', checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Biometric Login</p>
                        <p className="text-sm text-gray-600">Use fingerprint or face ID</p>
                      </div>
                      <Switch
                        checked={settingsData.security.biometricLogin}
                        onCheckedChange={(checked) => updateSecuritySettings('biometricLogin', checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Login Alerts</p>
                        <p className="text-sm text-gray-600">Get notified of new login attempts</p>
                      </div>
                      <Switch
                        checked={settingsData.security.loginAlerts}
                        onCheckedChange={(checked) => updateSecuritySettings('loginAlerts', checked)}
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Session Management</h4>
                  <div className="space-y-2">
                    <Label htmlFor="autoLogout">Auto-logout (minutes)</Label>
                    <Select 
                      value={settingsData.security.autoLogout.toString()} 
                      onValueChange={(value) => updateSecuritySettings('autoLogout', Number(value))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="60">1 hour</SelectItem>
                        <SelectItem value="120">2 hours</SelectItem>
                        <SelectItem value="0">Never</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Password</h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Lock className="h-4 w-4 mr-2" />
                      Change Password
                    </Button>
                  </div>
                </div>

                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-red-800">Delete Account</p>
                      <p className="text-sm text-red-700 mb-3">
                        Permanently delete your account and all data. This action cannot be undone.
                      </p>
                      <Button variant="destructive" size="sm">
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Preferences Settings */}
          <TabsContent value="preferences" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>App Preferences</CardTitle>
                <p className="text-sm text-gray-600">Customize your SaveSmart experience</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Display</h4>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Label>Language</Label>
                      <Select 
                        value={settingsData.preferences.language} 
                        onValueChange={(value) => updatePreferenceSettings('language', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="rw">Kinyarwanda</SelectItem>
                          <SelectItem value="fr">Français</SelectItem>
                          <SelectItem value="sw">Kiswahili</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Theme</Label>
                      <Select 
                        value={settingsData.preferences.theme} 
                        onValueChange={(value) => updatePreferenceSettings('theme', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System Default</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Savings</h4>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Label>Auto-Save Frequency</Label>
                      <Select 
                        value={settingsData.preferences.autoSaveFrequency} 
                        onValueChange={(value) => updatePreferenceSettings('autoSaveFrequency', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Default Save Amount (RWF)</Label>
                      <Input
                        type="number"
                        value={settingsData.preferences.defaultSaveAmount}
                        onChange={(e) => updatePreferenceSettings('defaultSaveAmount', Number(e.target.value))}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Budget Alerts</p>
                        <p className="text-sm text-gray-600">Get notified when approaching budget limits</p>
                      </div>
                      <Switch
                        checked={settingsData.preferences.budgetAlerts}
                        onCheckedChange={(checked) => updatePreferenceSettings('budgetAlerts', checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Savings Goal Reminders</p>
                        <p className="text-sm text-gray-600">Regular reminders about your savings goals</p>
                      </div>
                      <Switch
                        checked={settingsData.preferences.savingsGoalReminders}
                        onCheckedChange={(checked) => updatePreferenceSettings('savingsGoalReminders', checked)}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Privacy Settings */}
          <TabsContent value="privacy" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Privacy & Data</CardTitle>
                <p className="text-sm text-gray-600">Control how your data is used and shared</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Profile Visibility</h4>
                  <div className="space-y-2">
                    <Label>Who can see your profile</Label>
                    <Select 
                      value={settingsData.privacy.profileVisibility} 
                      onValueChange={(value) => updatePrivacySettings('profileVisibility', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="private">Private (Only you)</SelectItem>
                        <SelectItem value="friends">Friends only</SelectItem>
                        <SelectItem value="public">Public</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Share Progress</p>
                      <p className="text-sm text-gray-600">Allow sharing of savings milestones</p>
                    </div>
                    <Switch
                      checked={settingsData.privacy.shareProgress}
                      onCheckedChange={(checked) => updatePrivacySettings('shareProgress', checked)}
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Data Usage</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Analytics</p>
                        <p className="text-sm text-gray-600">Help improve SaveSmart with usage data</p>
                      </div>
                      <Switch
                        checked={settingsData.privacy.analyticsOptIn}
                        onCheckedChange={(checked) => updatePrivacySettings('analyticsOptIn', checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Marketing Communications</p>
                        <p className="text-sm text-gray-600">Receive personalized offers and tips</p>
                      </div>
                      <Switch
                        checked={settingsData.privacy.marketingOptIn}
                        onCheckedChange={(checked) => updatePrivacySettings('marketingOptIn', checked)}
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Cookie Preferences</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Necessary Cookies</p>
                        <p className="text-sm text-gray-600">Required for basic functionality</p>
                      </div>
                      <Switch checked={true} disabled />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Analytics Cookies</p>
                        <p className="text-sm text-gray-600">Help us understand how you use the app</p>
                      </div>
                      <Switch
                        checked={settingsData.privacy.cookiePreferences.analytics}
                        onCheckedChange={(checked) => updatePrivacySettings('cookiePreferences', {
                          ...settingsData.privacy.cookiePreferences,
                          analytics: checked
                        })}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Marketing Cookies</p>
                        <p className="text-sm text-gray-600">Personalize ads and content</p>
                      </div>
                      <Switch
                        checked={settingsData.privacy.cookiePreferences.marketing}
                        onCheckedChange={(checked) => updatePrivacySettings('cookiePreferences', {
                          ...settingsData.privacy.cookiePreferences,
                          marketing: checked
                        })}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Data Retention (days)</Label>
                  <Select 
                    value={settingsData.privacy.dataRetention.toString()} 
                    onValueChange={(value) => updatePrivacySettings('dataRetention', Number(value))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="90">90 days</SelectItem>
                      <SelectItem value="180">6 months</SelectItem>
                      <SelectItem value="365">1 year</SelectItem>
                      <SelectItem value="730">2 years</SelectItem>
                      <SelectItem value="-1">Keep forever</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Backup Settings */}
          <TabsContent value="backup" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Backup & Sync</CardTitle>
                <p className="text-sm text-gray-600">Keep your data safe and synchronized</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Automatic Backup</h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Enable Auto Backup</p>
                      <p className="text-sm text-gray-600">Automatically backup your data</p>
                    </div>
                    <Switch
                      checked={settingsData.backup.autoBackup}
                      onCheckedChange={(checked) => updateBackupSettings('autoBackup', checked)}
                    />
                  </div>
                  
                  {settingsData.backup.autoBackup && (
                    <div className="space-y-2">
                      <Label>Backup Frequency</Label>
                      <Select 
                        value={settingsData.backup.backupFrequency} 
                        onValueChange={(value) => updateBackupSettings('backupFrequency', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Sync Options</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Cloud Sync</p>
                        <p className="text-sm text-gray-600">Sync data across devices</p>
                      </div>
                      <Switch
                        checked={settingsData.backup.cloudSync}
                        onCheckedChange={(checked) => updateBackupSettings('cloudSync', checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Local Backup</p>
                        <p className="text-sm text-gray-600">Keep local copies on device</p>
                      </div>
                      <Switch
                        checked={settingsData.backup.localBackup}
                        onCheckedChange={(checked) => updateBackupSettings('localBackup', checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Backup Encryption</p>
                        <p className="text-sm text-gray-600">Encrypt backup files</p>
                        <Badge variant="outline" className="text-xs mt-1">Recommended</Badge>
                      </div>
                      <Switch
                        checked={settingsData.backup.backupEncryption}
                        onCheckedChange={(checked) => updateBackupSettings('backupEncryption', checked)}
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Backup Status</h4>
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium text-green-800">Last Backup Successful</p>
                        <p className="text-sm text-green-700">
                          {new Date(settingsData.backup.lastBackup).toLocaleDateString()} at{' '}
                          {new Date(settingsData.backup.lastBackup).toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button variant="outline" className="flex-1">
                      <Save className="h-4 w-4 mr-2" />
                      Backup Now
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Export Data
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
