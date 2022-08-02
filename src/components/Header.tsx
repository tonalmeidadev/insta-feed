import { FaInstagram } from 'react-icons/fa'

export function Header() {
  return (
    <header className='py-8 border-b border-zinc-800'>
      <a
        href='https://instagram.com/otonalmeidas'
        target='_blank'
        rel="noopener noreferrer"
        className='w-fit m-auto flex items-center justify-center gap-3 hover:underline'
      >
        <FaInstagram className='text-2xl' />
        <span>otonalmeidas</span>
      </a>
    </header>
  )
}