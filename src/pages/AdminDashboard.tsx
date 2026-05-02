import { LayoutDashboard, Package, ShoppingBag, Users, TrendingUp, BarChart3, Bell, Settings } from 'lucide-react';
import { motion } from 'motion/react';
import { formatPrice } from '../lib/utils';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Revenue', value: 'Rs. 4.2M', trend: '+12.5%', icon: <BarChart3 className="w-5 h-5" /> },
    { label: 'Active Orders', value: '1,240', trend: '+5.2%', icon: <ShoppingBag className="w-5 h-5" /> },
    { label: 'Customers', value: '45,000', trend: '+8.1%', icon: <Users className="w-5 h-5" /> },
    { label: 'Conversion Rate', value: '3.8%', trend: '+0.5%', icon: <TrendingUp className="w-5 h-5" /> },
  ];

  const recentOrders = [
    { id: '#PK-8921', customer: 'Ahmed K.', items: 3, total: 1250, status: 'Shipped', time: '2 mins ago' },
    { id: '#PK-8920', customer: 'Sarah M.', items: 1, total: 450, status: 'Processing', time: '15 mins ago' },
    { id: '#PK-8919', customer: 'Zain A.', items: 6, total: 2800, status: 'Delivered', time: '45 mins ago' },
    { id: '#PK-8918', customer: 'Fatima R.', items: 2, total: 900, status: 'Processing', time: '1 hour ago' },
  ];

  return (
    <div className="flex min-h-screen bg-[#050505]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 flex flex-col p-6 hidden lg:flex">
        <div className="flex items-center gap-2 mb-12">
          <div className="bg-red-600 p-1.5 rounded-lg">
             <LayoutDashboard className="w-6 h-6 text-white" />
          </div>
          <span className="font-black tracking-tighter">PK ADMIN</span>
        </div>

        <nav className="flex-1 space-y-2">
           {[
             { label: 'Overview', icon: <BarChart3 className="w-4 h-4" />, active: true },
             { label: 'Orders', icon: <ShoppingBag className="w-4 h-4" /> },
             { label: 'Products', icon: <Package className="w-4 h-4" /> },
             { label: 'Customers', icon: <Users className="w-4 h-4" /> },
             { label: 'Marketing', icon: <TrendingUp className="w-4 h-4" /> },
           ].map((item) => (
             <button
               key={item.label}
               className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                 item.active ? 'bg-red-600 text-white' : 'text-white/40 hover:text-white hover:bg-white/5'
               }`}
             >
               {item.icon}
               {item.label}
             </button>
           ))}
        </nav>

        <div className="pt-8 border-t border-white/5 space-y-2">
           <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-white/40 hover:text-white hover:bg-white/5 transition-all">
             <Settings className="w-4 h-4" />
             Settings
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-12">
         <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
               <h1 className="text-3xl font-black tracking-tighter">DASHBOARD OVERVIEW</h1>
               <p className="text-white/40 text-sm">Welcome back. PK Drinks is performing at 112% today.</p>
            </div>
            <div className="flex items-center gap-4">
               <button className="p-3 bg-white/5 rounded-xl border border-white/10 text-white/40 hover:text-white transition-all relative">
                  <Bell className="w-5 h-5" />
                  <div className="absolute top-3 right-3 w-2 h-2 bg-red-600 rounded-full" />
               </button>
               <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                  <div className="w-8 h-8 rounded-full bg-red-600" />
                  <div>
                    <div className="text-xs font-bold leading-none">Admin User</div>
                    <div className="text-[10px] text-white/40">super_admin</div>
                  </div>
               </div>
            </div>
         </header>

         {/* Stats Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-3xl"
              >
                 <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-white/5 rounded-xl text-red-600">{stat.icon}</div>
                    <span className="text-[10px] font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">{stat.trend}</span>
                 </div>
                 <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</h4>
                 <div className="text-3xl font-black tracking-tighter italic">{stat.value}</div>
              </motion.div>
            ))}
         </div>

         {/* Table Concept */}
         <div className="bg-white/5 border border-white/10 rounded-[40px] overflow-hidden">
            <div className="p-8 border-b border-white/5 flex items-center justify-between">
               <h3 className="text-xl font-bold tracking-tight italic">RECENT ACTIVITY</h3>
               <button className="text-xs font-bold text-red-600 hover:underline tracking-widest uppercase">View All Orders</button>
            </div>
            <div className="overflow-x-auto">
               <table className="w-full text-left">
                  <thead>
                     <tr className="text-[10px] uppercase tracking-widest font-bold text-white/30 bg-white/[0.02]">
                        <th className="px-8 py-4">Order ID</th>
                        <th className="px-8 py-4">Customer</th>
                        <th className="px-8 py-4">Items</th>
                        <th className="px-8 py-4">Status</th>
                        <th className="px-8 py-4">Time</th>
                        <th className="px-8 py-4">Total</th>
                        <th className="px-8 py-4 text-right">Action</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                     {recentOrders.map((order) => (
                       <tr key={order.id} className="hover:bg-white/[0.02] transition-colors group">
                          <td className="px-8 py-6 font-bold text-white/80">{order.id}</td>
                          <td className="px-8 py-6 font-bold">{order.customer}</td>
                          <td className="px-8 py-6 text-white/40">{order.items} items</td>
                          <td className="px-8 py-6">
                             <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter ${
                               order.status === 'Shipped' ? 'bg-blue-500/10 text-blue-500' :
                               order.status === 'Processing' ? 'bg-orange-500/10 text-orange-500' :
                               'bg-green-500/10 text-green-500'
                             }`}>
                                {order.status}
                             </span>
                          </td>
                          <td className="px-8 py-6 text-white/30 text-sm whitespace-nowrap">{order.time}</td>
                          <td className="px-8 py-6 font-black text-red-600">{formatPrice(order.total)}</td>
                          <td className="px-8 py-6 text-right">
                             <button className="text-xs font-bold bg-white/5 border border-white/10 px-4 py-2 rounded-lg group-hover:bg-red-600 group-hover:text-white transition-all">
                                Manage
                             </button>
                          </td>
                       </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </main>
    </div>
  );
}
