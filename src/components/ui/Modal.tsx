import { useEffect } from 'react';

export const Modal = ({
  children,
  isOpen,
  closeModal,
}: {
  children?: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}) => {
  useEffect(() => {
    if (!isOpen) return;
    // Disable scrolling on the background (body) when the modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      // Re-enable scrolling when the modal is closed
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 top-[73px] flex items-start justify-center z-40 bg-black p-4'
      onClick={closeModal}
      style={{ height: 'calc(100% - 73px)' }}
    >
      <div
        className='w-full h-full bg-black rounded z-50 overflow-y-auto disable-scrollbars'
        onClick={(e) => e.stopPropagation()}
      >
        <div>{children}</div>
      </div>
    </div>
  );
};
