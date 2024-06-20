// import { Modal, useMantineTheme } from '@mantine/core';
// import PostShare from './PostShare';

// function ShareModal({ modalOpened, setModalOpened }) {
//   const theme = useMantineTheme();

//   return (
//     <Modal
//       overlayColor={
//         theme.colorScheme === 'dark'
//           ? theme.colors.dark[9]
//           : theme.colors.gray[2]
//       }
//       overlayOpacity={0.55}
//       overlayBlur={3}
//       size="55%"
//       opened={modalOpened}
//       onClose={() => setModalOpened(false)}
//     >
//       <PostShare />
//     </Modal>
//   );
// }

// export default ShareModal;
// import { useDisclosure } from '@mantine/hooks';
// import { Modal, Button } from '@mantine/core';

function ShareModal() {
  // const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      {/* <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
     
      </Modal> */}

      {/* <Button onClick={open}>Open modal</Button> */}
    </>
  );
}

export default ShareModal;
