import { Button } from '@/components/ui/button'
import DashboardCard from '@/components/dashboard/DashboardCard'

export default function Home() {
  return (
    <>
      <DashboardCard />
      <h1 className='text-2xl mx-2'>Dashboard</h1>
      <Button size='lg' className='mx-2'>Click Me</Button>
    </>
  );
}
