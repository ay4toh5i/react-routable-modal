import { useCallback } from 'react';
import {
  Routes,
  Route,
  Navigate,
  useRoutes,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { Modal } from '@/components/Modal';
import { Top } from '@/pages/Top';
import { Content } from '@/pages/Content';
import { Description } from '@/pages/Description';

export const Routing = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const state = location.state as { backgroundPath?: string };

  const background = state?.backgroundPath ?? '/';

  const dismissHandler = useCallback(() => navigate(background), [navigate, background]);

  const modalElement = useRoutes([
    {
      path: '/modal',
      element: <Content />,
    },
  ]);

  return (
    <>
      <Routes location={modalElement !== null ? background : undefined}>
        <Route path="/" element={<Top />} />
        <Route path="/description" element={<Description />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Modal show={modalElement !== null} onDismiss={dismissHandler}>
        {modalElement}
      </Modal>
    </>
  );
};
