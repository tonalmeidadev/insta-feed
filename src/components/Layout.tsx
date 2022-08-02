type LayoutProps = {
  children: React.ReactNode
}

export function Layout(props: LayoutProps) {
  return (
    <div className="flex flex-col w-full min-h-screen max-w-4xl gap-10 m-auto px-8">
      {props.children}
    </div>
  )
}