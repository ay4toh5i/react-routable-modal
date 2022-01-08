import ReactDOM from 'react-dom';
import React, { useEffect, useRef, useCallback, ReactNode } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { useDismissListener } from 'hooks/useDismissListener';

const duration = 125;

const ModalContainer = styled.div`
  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 1;
    transition: opacity ${duration}ms ease-in-out;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
    transition: opacity ${duration}ms ease-out;
  }
`;

const BackDrop = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  filter: opacity(0.5);
`;

const ModalContent = styled.div`
  display: flex;
  position: fixed;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.5rem;
  background-color: #ffffff;
  max-height: 80vh;
  min-width: 26.75rem;
  max-width: 80vw;
  overflow: hidden;
  outline: none;
  & > * {
    overflow-x: hidden;
    overflow-y: auto;
  }
`;

const isTouchDevice = () => window.matchMedia('(pointer: coarse)').matches;

const isScrollBarVisible = () => {
  const { documentElement } = document;
  return documentElement.scrollHeight > documentElement.clientHeight;
};

const fixScrollbar = () => {
  const { body } = document;

  body.style.overflowY = 'hidden';

  if (!isTouchDevice() && isScrollBarVisible()) {
    body.style.paddingInlineEnd = 'var(--scrollbar-width)';
  }
};

const freeScrollbar = () => {
  const { body } = document;

  body.style.overflowY = '';

  body.style.paddingInlineEnd = '';
};

export type ModalProps = {
  show: boolean;
  children: ReactNode;
  onDismiss: () => void;
};

const modalRoot = document.getElementById('modal-root') as HTMLElement;

export const Modal = React.memo(({ show, children, onDismiss }: ModalProps) => {
  const containerRef = useRef(null);
  const modalRef = useDismissListener<HTMLDivElement>(onDismiss);

  useEffect(() => {
    if (show) {
      fixScrollbar();
    }
  }, [show]);

  useEffect(() => {
    return () => {
      freeScrollbar();
    };
  }, []);

  const enterHandler = useCallback(() => {
    modalRef.current?.focus();
  }, [modalRef]);

  const exitedHandler = useCallback(() => {
    freeScrollbar();
  }, []);

  const modal = (
    <CSSTransition
      nodeRef={containerRef}
      in={show}
      timeout={duration}
      classNames="fade"
      onEnter={enterHandler}
      onExited={exitedHandler}
      mountOnEnter
      unmountOnExit
    >
      <ModalContainer ref={containerRef}>
        <BackDrop />
        <ModalContent ref={modalRef} role="dialog" aria-modal="true" tabIndex={-1}>
          {children}
        </ModalContent>
      </ModalContainer>
    </CSSTransition>
  );

  return ReactDOM.createPortal(modal, modalRoot);
});
