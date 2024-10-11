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
import { Radio, RadioGroup } from "@nextui-org/radio";
import { Divider } from "@nextui-org/divider";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import { Input } from "@nextui-org/input";
import { toast } from "react-toastify";

const EditConfigModal: React.FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState<string>("auto");
  const [wifiSSID, setWifiSSID] = useState<string>("Server_Fetched");
  const [wifiPassword, setWifiPassword] = useState<string>("Server_Fetched");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [mqttServer, setMqttServer] = useState<string>("Server_Fetched");
  const [pingIdentityTopic, setPingIdentityTopic] =
    useState<string>("Server_Fetched");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setScrollBehavior(event.target.value); // Use the value from the event
  };

  // Handlers for input changes
  const handleWifiSSIDChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWifiSSID(event.target.value);
  };

  const handleWifiPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setWifiPassword(event.target.value);
  };

  const handleMqttServerChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMqttServer(event.target.value);
  };

  const handlePingIdentityTopicChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPingIdentityTopic(event.target.value);
  };

  return (
    <div className="flex flex-col gap-2 p-2">
      <Button
        onPress={onOpen}
        className="min-w-1/2 gradient-text2 "
        variant="ghost"
        color="secondary"
      >
        Edit Config
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
                  <Input
                    isClearable
                    isDisabled={isLoading}
                    onClear={() => setWifiSSID("")}
                    radius={"md"}
                    label="Wifi SSID"
                    placeholder="Enter WiFi SSID"
                    value={wifiSSID}
                    onChange={handleWifiSSIDChange} // Use onChange to update state
                    className="max-w-[220px]"
                  />
                  <Input
                    isClearable
                    isDisabled={isLoading}
                    onClear={() => setWifiPassword("")}
                    radius={"md"}
                    label="Wifi Password"
                    placeholder="Enter the WiFi Password"
                    value={wifiPassword}
                    onChange={handleWifiPasswordChange} // Use onChange to update state
                    className="max-w-[220px]"
                  />
                  <Input
                    isClearable
                    isDisabled={isLoading}
                    onClear={() => setMqttServer("")}
                    radius={"md"}
                    label="MQTT Server"
                    placeholder="Enter the MQTT Server"
                    value={mqttServer}
                    onChange={handleMqttServerChange} // Use onChange to update state
                    className="max-w-[220px]"
                  />
                  <Input
                    isClearable
                    isDisabled={isLoading}
                    onClear={() => setPingIdentityTopic("")}
                    radius={"md"}
                    label="Ping Identity Topic"
                    placeholder="Enter the Ping Identity Topic"
                    value={pingIdentityTopic}
                    onChange={handlePingIdentityTopicChange} // Use onChange to update state
                    className="max-w-[220px]"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    console.log({
                      wifiSSID,
                      wifiPassword,
                      mqttServer,
                      pingIdentityTopic,
                    });
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
