import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Button,
  
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
  import SingleAlldress from './singleAlldres';
  import { useNavigate } from 'react-router-dom';
//   const IMAGE =
//     'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
  
  export default function CartFurniture({IMAGE,txt1,price,Id,url,size,name}) {

//    return 
let nav=useNavigate()

    return (
      <Center >
        <Box
          role={'group'}
          p={6}
          maxW={'480px'}
          maxH={'580px'}
          w={'full'}
          bg={useColorModeValue('#E3DFFD', 'gray.500')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-9}
            pos={'relative'}
            height={'480px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
            onClick={()=>{
                return (
                <>
                <SingleAlldress
                Id={Id}
                url={url}
                />
               { nav(`/furniture/${Id}`)}
               </> )
            }}
              rounded={'lg'}
              height={"480px"}
              width={"100%"}
              objectFit={'cover'}
              src={IMAGE}
            />
          </Box>
          <Stack pt={8} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'}  textTransform={'uppercase'}>
             $ {price} - {+price+1000}
            </Text>
            <Heading fontSize={'s'} fontWeight={700}>
              {name}
            </Heading>
            {/* <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
                $57
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                $199
              </Text>
            </Stack> */}
            <Text>{txt1} </Text>
          </Stack>
        </Box>
      </Center>
    );
  }