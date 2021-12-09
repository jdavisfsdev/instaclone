import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

function Modal() {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <Transition.Root show={open} as={Fragment}>
      <h1></h1>
    </Transition.Root>
  );
}

export default Modal;
