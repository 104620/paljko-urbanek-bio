import React, { useContext } from "react";

import { Modal } from "flowbite-react";

import {
  useAppDispatch,
  useAppSelector,
  setCustomModal,
  enableCustomModal,
  ProjectsContext,
} from "app";
import { ICardCustom } from "./ModalCustom.interface";
import styles from "./ModalCustom.module.scss";

export const ModalCustom: React.FC<ICardCustom> = ({
  title,
  subtitle,
  sectionText,
}) => {
  const context: { [key: string]: any } = useContext(ProjectsContext);
  const dispatch = useAppDispatch();
  const isModalCustom = useAppSelector(enableCustomModal);

  const handleCancel = (): void => {
    dispatch(setCustomModal(false));
  };

  const onCloseModal = (): void => {
    handleCancel();
  };

  return (
    <>
      <Modal show={isModalCustom} size="xl" onClose={onCloseModal}>
        <Modal.Header className={styles["modal-header"]}>{title}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6 p-6">
            <p
              className={`text-base leading-relaxed text-gray-500 dark:text-gray-400 ${styles["modal-section-text"]}`}
            >
              {sectionText}
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
