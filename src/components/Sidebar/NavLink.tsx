import { ElementType } from 'react'
import { Link, Icon, Text, LinkProps as ChakreLinkProps } from "@chakra-ui/react";

interface NavLinkProps extends ChakreLinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20"/>
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
  )
}