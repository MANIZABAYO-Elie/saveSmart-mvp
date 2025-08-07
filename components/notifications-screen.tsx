"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Bell, CheckCircle, Trash2, Filter, MoreVertical, Target, CreditCard, TrendingUp, AlertTriangle, Lightbulb, Users, Settings } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { useState } from "react"

interface Notification {
  id: number
  title: string
  message: string
  type: 'achievement' | 'transaction' | 'reminder' | 'tip' | 'alert' | 'report' | 'challenge' | 'social' | 'system'
  timestamp: string
  read: boolean
}

interface NotificationsScreenProps {
  notificationsData: {
    notifications: Notification[]
    unreadCount: number
  }
  markNotificationAsRead: (id: number) => void
  markAllNotificationsAsRead: () => void
  deleteNotification: (id: number) => void
  onBack: () => void
}

export default function NotificationsScreen({ 
  notificationsData, 
  markNotificationAsRead, 
  markAllNotificationsAsRead, 
  deleteNotification, 
  onBack 
}: NotificationsScreenProps) {
  const [filter, setFilter] = useState<string>('all')

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'achievement':
        return <Target className="h-5 w-5 text-green-600" />
      case 'transaction':
        return <CreditCard className="h-5 w-5 text-blue-600" />
      case 'reminder':
        return <Bell className="h-5 w-5 text-orange-600" />
      case 'tip':
        return <Lightbulb className="h-5 w-5 text-purple-600" />
      case 'alert':
        return <AlertTriangle className="h-5 w-5 text-red-600" />
      case 'report':
        return <TrendingUp className="h-5 w-5 text-indigo-600" />
      case 'challenge':
        return <Target className="h-5 w-5 text-pink-600" />
      case 'social':
        return <Users className="h-5 w-5 text-cyan-600" />
      case 'system':
        return <Settings className="h-5 w-5 text-gray-600" />
      default:
        return <Bell className="h-5 w-5 text-gray-600" />
    }
  }

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'achievement':
        return 'bg-green-50 border-green-200'
      case 'transaction':
        return 'bg-blue-50 border-blue-200'
      case 'reminder':
        return 'bg-orange-50 border-orange-200'
      case 'tip':
        return 'bg-purple-50 border-purple-200'
      case 'alert':
        return 'bg-red-50 border-red-200'
      case 'report':
        return 'bg-indigo-50 border-indigo-200'
      case 'challenge':
        return 'bg-pink-50 border-pink-200'
      case 'social':
        return 'bg-cyan-50 border-cyan-200'
      case 'system':
        return 'bg-gray-50 border-gray-200'
      default:
        return 'bg-gray-50 border-gray-200'
    }
  }

  const filteredNotifications = notificationsData.notifications.filter(notification => {
    if (filter === 'all') return true
    if (filter === 'unread') return !notification.read
    return notification.type === filter
  })

  const handleNotificationClick = (notification: Notification) => {
    if (!notification.read) {
      markNotificationAsRead(notification.id)
    }
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
                <h1 className="text-xl font-bold">Notifications</h1>
                <p className="text-sm text-gray-600">
                  {notificationsData.unreadCount} unread notifications
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
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
      </div>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Filters */}
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
                  <SelectItem value="achievement">🎯 Achievements</SelectItem>
                  <SelectItem value="transaction">💳 Transactions</SelectItem>
                  <SelectItem value="reminder">⏰ Reminders</SelectItem>
                  <SelectItem value="tip">💡 Tips</SelectItem>
                  <SelectItem value="alert">⚠️ Alerts</SelectItem>
                  <SelectItem value="report">📊 Reports</SelectItem>
                  <SelectItem value="challenge">🏆 Challenges</SelectItem>
                  <SelectItem value="social">👥 Social</SelectItem>
                  <SelectItem value="system">⚙️ System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Notifications List */}
        <div className="space-y-3">
          {filteredNotifications.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-600 mb-2">No notifications found</p>
                <p className="text-gray-500">
                  {filter === 'unread' 
                    ? "You're all caught up! No unread notifications." 
                    : `No ${filter} notifications to show.`
                  }
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredNotifications.map((notification) => (
              <Card
                key={notification.id}
                className={`cursor-pointer transition-colors hover:shadow-md ${
                  !notification.read 
                    ? getNotificationColor(notification.type) 
                    : 'bg-white border-gray-200'
                }`}
                onClick={() => handleNotificationClick(notification)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      <div className="mt-1">
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className={`font-medium ${
                            !notification.read ? 'text-gray-900' : 'text-gray-700'
                          }`}>
                            {notification.title}
                          </h3>
                          {!notification.read && (
                            <Badge variant="secondary" className="text-xs">New</Badge>
                          )}
                        </div>
                        <p className={`text-sm ${
                          !notification.read ? 'text-gray-700' : 'text-gray-600'
                        }`}>
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          {formatDistanceToNow(new Date(notification.timestamp), { addSuffix: true })}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
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
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Quick Actions */}
        {notificationsData.notifications.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <Button 
                  variant="outline" 
                  className="justify-start h-auto p-4"
                  onClick={() => setFilter('unread')}
                >
                  <div className="text-left">
                    <p className="font-medium">View Unread</p>
                    <p className="text-sm text-gray-600">{notificationsData.unreadCount} unread notifications</p>
                  </div>
                </Button>
                <Button 
                  variant="outline" 
                  className="justify-start h-auto p-4"
                  onClick={() => setFilter('achievement')}
                >
                  <div className="text-left">
                    <p className="font-medium">Achievements</p>
                    <p className="text-sm text-gray-600">View your milestones</p>
                  </div>
                </Button>
                <Button 
                  variant="outline" 
                  className="justify-start h-auto p-4"
                  onClick={() => setFilter('alert')}
                >
                  <div className="text-left">
                    <p className="font-medium">Important Alerts</p>
                    <p className="text-sm text-gray-600">Critical notifications</p>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
