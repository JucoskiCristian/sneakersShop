interface LinkProps {
  link: string
  label: string
}

export function LinkItem({ link, label }: LinkProps) {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
      >
        {label}
      </a>
    </li>
  )
}
