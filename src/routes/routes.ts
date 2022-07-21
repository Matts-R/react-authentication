export interface LinkInterface {
  to: string,
  name: string,
  replace?: boolean,
  state?: any
}

export const RoutesList: LinkInterface[] = [
	{
    to: "/",
    name: 'Home',
		replace: false,
		state: {},
	},
	{
    to: "/about",
    name: 'About',
		replace: false,
		state: {},
	},
];