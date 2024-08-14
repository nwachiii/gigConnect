import {UserIcon} from '@/assets/icons/Navbar/user-icon';
import {emailStyle, userNameStyle} from '@/components/generic-components/Headers/UserProfileMenu';
import {StarRating} from '@/ui-lib/ui-lib-components/StarRating';
import {Avatar, Box, Button, Flex, Heading, Image, Stack, StackDivider, Text, VStack} from '@chakra-ui/react';
import dayjs from 'dayjs';

export const ContractDetails = () => {
	const currentDate = dayjs().format('MMM D, YYYY');
	return (
		<Flex gap={6} w='full' justify={'space-between'}>
			<Stack w='full'>
				<VStack border={'1px solid #EDEEEF'} p={'16px'} rounded={'12px'} gap={2} pb={4} align='start' h={'max-content'}>
					<Heading fontSize={18}>Summary</Heading>
					<Stack w='full' pt={2}>
						<Flex fontWeight={500} fontSize={14} justify={'space-between'}>
							<Text color='#707581'>Contract type</Text>
							<Text>Fixed Price</Text>
						</Flex>
						<Flex fontWeight={500} fontSize={14} justify={'space-between'}>
							<Text color='#707581'>Total Spent</Text>
							<Text>$ 340.00</Text>
						</Flex>
						<Flex fontWeight={500} fontSize={14} justify={'space-between'}>
							<Text color='#707581'>Total Spent</Text>
							<Text>{currentDate}</Text>
						</Flex>
						<Flex fontWeight={500} fontSize={14} justify={'space-between'}>
							<Text color='#707581'>Contact Person</Text>
							<Text>Ola Ahmed</Text>
						</Flex>
					</Stack>
					<Text color='#878C95' fontSize={12} maxW={200}>
						Aliquam tincidunt, diam id facilisis hendrerit, nibh quam.
					</Text>
					<Button fontWeight={400} fontSize={14} bg='#F6F7F7' border='1px solid #EDEEEF' color='#4C5361' p={'6px 14px'} rounded={'16px'} w='max-content' h='32px'>
						Show Details
					</Button>
				</VStack>
				<VStack border={'1px solid #EDEEEF'} p={'16px'} gap={2} pb={4} align='start' h={'max-content'}>
					<Heading fontSize={18}>Description</Heading>
					<Text fontSize={12} maxW={350}>
						Nam fermentum leo quis luctus lobortis. Proin a ultricies leo, a auctor mi. Praesent scelerisque volutpat dui, in egestas tellus porttitor et. Etiam convallis turpis et quam maximus luctus. Etiam molestie ante eu nibh efficitur faucibus. Nunc vel dolor in tellus eleifend rutrum. Nulla facilisi. Etiam euismod facilisis purus at ullamcorper. Maecenas vel egestas nulla, nec aliquam tellus. Praesent dictum mi nec lorem porta lobortis. Pellentesque habitant morbi
					</Text>
					<Text fontWeight={400} color='#325FFF' fontSize={14}>
						View Contract Proposal
					</Text>
				</VStack>
				<VStack border={'1px solid #EDEEEF'} p={'16px'} rounded={'12px'} gap={2} pb={4} align='start' h={'max-content'}>
					<Heading fontSize={18}>Recent Activities</Heading>
					<Stack w='full'>
						<Flex fontSize={12} gap={6} border={'1px solid #EDEEEF'} bg='#F6F7F7' rounded={'8px'} px={10} py={1}>
							<Text>Date</Text>
							<Text>Description</Text>
						</Flex>
						<Stack divider={<StackDivider />}>
							<Flex fontSize={12} gap={6} px={4} py={1}>
								<Text textAlign={'end'} color='#707581' fontSize={10} maxW={50}>
									{currentDate}
								</Text>
								<Stack gap={0}>
									<Text>Kemi Daniels gave you feedback</Text>
									<StarRating ratingNumber={4} />
								</Stack>
							</Flex>
							<Flex fontSize={12} gap={6} px={4} py={1}>
								<Text textAlign={'end'} color='#707581' fontSize={10} maxW={50}>
									{currentDate}
								</Text>
								<Text>You ended the contract with Kemi</Text>
							</Flex>
							<Flex fontSize={12} gap={6} px={4} py={1}>
								<Text textAlign={'end'} color='#707581' fontSize={10} maxW={50}>
									{currentDate}
								</Text>
								<Stack gap={0}>
									<Text>Kemi Daniels gave you feedback</Text>
									<StarRating ratingNumber={4} />
								</Stack>
							</Flex>
							<Flex fontSize={12} gap={6} px={4} py={1}>
								<Text textAlign={'end'} color='#707581' fontSize={10} maxW={50}>
									{currentDate}
								</Text>
								<Text maxW={250}>Nam fermentum leo quis luctus lobortis. Proin a ultricies leo, a auctor mi. Praesent scelerisque volutpat dui, in egestas tellus porttitor et. Etiam convallis turpis et quam maximus luctus tiam molestie ante eu nibh efficitur faucibus Nunc vel dolor in tellus eleifend rutrum. Nulla facilisi.</Text>
							</Flex>
							<Button fontWeight={400} fontSize={14} bg='#F6F7F7' border='1px solid #EDEEEF' color='#4C5361' p={'6px 14px'} rounded={'16px'} w='200px' alignSelf={'center'}>
								See all activities
							</Button>
						</Stack>
					</Stack>
				</VStack>
			</Stack>
			<Stack gap={8}>
				<VStack border={'1px solid #EDEEEF'} p={'16px'} rounded={'12px'} gap={4} pb={4} align='start' minH={'280px'} minW={'250px'} justify={'end'}>
					<Heading fontSize={18}>About Client</Heading>
					<Flex align='center' textAlign={'left'} gap='4px'>
						<Avatar bg='#F5F5F5' icon={<UserIcon />} />
						<span>
							<Text {...userNameStyle}>Ola Ahmed</Text>
							<Text {...emailStyle} whiteSpace={'nowrap'}>
								KCMIJ Industry Limited
							</Text>
						</span>
					</Flex>
					<VStack align='start'>
						<Text {...emailStyle} whiteSpace={'nowrap'}>
							Location
						</Text>
						<Text {...userNameStyle}>Lagos, Nigeria</Text>
					</VStack>
					<Button fontWeight={400} fontSize={14} bg='#F6F7F7' border='1px solid #EDEEEF' color='#4C5361' p={'6px 14px'} rounded={'16px'} w='full'>
						View Profile
					</Button>
				</VStack>
				<VStack border={'1px solid #EDEEEF'} p={'16px'} rounded={'12px'} gap={4} pb={4} align='start' h={'max-content'} minW={'250px'}>
					<Heading fontSize={18}>Feedback</Heading>
					<Flex align='center' textAlign={'left'} gap='4px'>
						<Avatar bg='#F5F5F5' icon={<UserIcon />} />
						<span>
							<Text {...userNameStyle}>Ola Ahmed</Text>
							<Text {...emailStyle} whiteSpace={'nowrap'}>
								KCMIJ Industry Limited
							</Text>
						</span>
					</Flex>
					<Stack w='full'>
						<Stack gap={0}>
							<Text fontWeight={500} fontSize={14}>
								Your feedback to Kemi
							</Text>
							<StarRating ratingNumber={4} />
						</Stack>
						<Stack border='1px solid #F6F7F7'>
							<Text fontSize={10} bg='#F6F7F7' roundedTop={'8px'} pl={3} py={1} w='full'>
								Note
							</Text>
							<Text px={2} maxW={200} fontSize={12}>
								Etiam euismod facilisis purus at ullamcorper. Maecenas vel egestas nulla, nec aliquam tellus.
							</Text>
						</Stack>
					</Stack>
					<Button fontWeight={400} fontSize={14} bg='#F6F7F7' border='1px solid #EDEEEF' color='#4C5361' p={'6px 14px'} rounded={'16px'} w='full'>
						Edit Feedback
					</Button>
					<Stack w='full'>
						<Stack gap={0}>
							<Text fontWeight={500} fontSize={14}>
								Kemi’s feedback to You
							</Text>
							<StarRating ratingNumber={4} />
						</Stack>
						<Stack border='1px solid #F6F7F7'>
							<Text fontSize={10} bg='#F6F7F7' roundedTop={'8px'} pl={3} py={1} w='full'>
								Note
							</Text>
							<Text px={2} maxW={200} fontSize={12}>
								Etiam euismod facilisis purus at ullamcorper. Maecenas vel egestas nulla, nec aliquam tellus.
							</Text>
						</Stack>
					</Stack>
				</VStack>
			</Stack>
		</Flex>
	);
};
