import {
	Box,
	Flex,

	HStack,

	Button,
	useColorModeValue,

} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
export default function Navbar() {

	return (
		<>
			<Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<HStack spacing={8} alignItems={'center'}>
						<Link to='/Home'>
							<Box>HOME</Box>
						</Link>
						<HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
							<Link to='/NewTask'>ADD NEW TASK</Link>
							<Link to='/crud'>TASK PAGE</Link>
						</HStack>
					</HStack>
					<Flex alignItems={'center'}>
						<Link to='/login'>
							<Button
								variant={'solid'}
								colorScheme={'teal'}
								size={'sm'}
								mr={4}
							>
								Login
							</Button>
						</Link>
					</Flex>
				</Flex>
			</Box>
		</>
	)
}