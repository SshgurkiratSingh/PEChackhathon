"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import { toast } from "react-toastify";

const EditConfigModal: React.FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-2 p-2">
      <Button
        onPress={onOpen}
        className="min-w-1/2 gradient-text2 "
        variant="ghost"
        color="secondary"
      >
        Node Identity Logs
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior={"inside"}
      >
        <ModalContent>
          {(onClose: any) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit Config Settings
              </ModalHeader>
              <ModalBody>
                <Divider />
                <Popover placement="top" color={"secondary"} className="">
                  <PopoverTrigger>
                    <Button color={"warning"} className="capitalize w-1/2">
                      Connection Details
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2">
                      <div className="text-small font-bold">
                        Connected to Master Node By:
                      </div>
                      <div className="text-tiny">MQTT Broker</div>
                      <Button color="warning" className="capitalize" size="sm">
                        Ping
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
                <Divider />
                <div className="flex flex-col gap-1 items-center">
                  <Button color="warning" className="capitalize" size="sm">
                    Send Ping Identity
                  </Button>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    toast.success("Config Updated Successfully");
                    onClose();
                  }}
                >
                  Update Config
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default EditConfigModal;
