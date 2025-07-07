"use client";

import { useState } from "react";
import { X, Plus, Trash2, Edit, ArrowUpRight, ImageIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FieldEditor from "../../add-new-service/_components/FieldEditor";
import ButtonEditor from "../../add-new-service/_components/ButtonEditor";
import SelectionEditor from "../../add-new-service/_components/SelectionEditor";
import AddPageModal from "../../add-new-service/_components/AddPageModal";
import AddFieldModal from "../../add-new-service/_components/AddFieldModal";
import CreateActionModal from "../../add-new-service/_components/CreateActionModal";
import ActionModal from "../../add-new-service/_components/ActionModal";
import SelectionModal from "../../add-new-service/_components/SelectionModal";


export default function EditService(id) {
  const [pages, setPages] = useState([
    {
      id: "1",
      name: "Size of your house",
      type: "Input",
      fields: [
        {
          id: "1",
          name: "Less than 1000 sq ft",
          type: "Text",
          price: "$100.00",
        },
        {
          id: "2",
          name: "1000 - 3000 sq ft",
          type: "Text",
          price: "$200.00",
        },
        {
          id: "3",
          name: "More than 3000 sq ft",
          type: "Text",
          price: "$400.00",
        },
      ],
    },
    {
      id: "2",
      name: "Quantity of rooms",
      type: "Button",
      fields: [],
      buttonText: "+ Add",
      action: "",
    },
    {
      id: "3",
      name: "Page name goes here",
      type: "Selection",
      fields: [{ id: "1", name: "Field text", type: "", price: "" }],
    },
  ]);

  // AddPageModal state
  const [newPageType, setNewPageType] = useState("");
  const [newPageName, setNewPageName] = useState("");
  const [newFieldName, setNewFieldName] = useState("");
  const [newFieldType, setNewFieldType] = useState("");
  const [newFieldPrice, setNewFieldPrice] = useState("");

  // other states
  const [showAddPageModal, setShowAddPageModal] = useState(false);
  const [showAddFieldModal, setShowAddFieldModal] = useState(false);
  const [showCreateActionModal, setShowCreateActionModal] = useState(false);
  const [showActionModal, setShowActionModal] = useState(false);
  const [showSelectionModal, setShowSelectionModal] = useState(false);
  const [currentPageId, setCurrentPageId] = useState("");
  const [status, setStatus] = useState("");
  const [fieldName, setFieldName] = useState("");
  const [fieldType, setFieldType] = useState("");
  const [price, setPrice] = useState("");
  const [modalName, setModalName] = useState("");
  const [newOption, setNewOption] = useState("");

  const [selectionOptions, setSelectionOptions] = useState([
    { id: "1", text: "Bedroom", type: "Small", price: "$30.00" },
    { id: "2", text: "Bedroom", type: "Medium", price: "$30.00" },
  ]);

  // utility functions

  const deletePage = (pageId) => {
    setPages(pages.filter((page) => page.id !== pageId));
  };

  const addField = (pageId) => {
    setPages((prevPages) =>
      prevPages.map((page) =>
        page.id === pageId
          ? {
              ...page,
              fields: [
                ...page.fields,
                {
                  id: Date.now().toString(),
                  name: "",
                  type: "Text",
                  price: "",
                },
              ],
            }
          : page
      )
    );
  };

  const deleteField = (pageId, fieldId) => {
    setPages((prevPages) =>
      prevPages.map((page) =>
        page.id === pageId
          ? {
              ...page,
              fields: page.fields.filter((field) => field.id !== fieldId),
            }
          : page
      )
    );
  };

  const updateField = (pageId, fieldId, updatedValues) => {
    setPages((prevPages) =>
      prevPages.map((page) =>
        page.id === pageId
          ? {
              ...page,
              fields: page.fields.map((f) =>
                f.id === fieldId ? { ...f, ...updatedValues } : f
              ),
            }
          : page
      )
    );
  };

  const handleChangeFieldName = (pageId, fieldId, value) => {
    updateField(pageId, fieldId, { name: value });
  };

  const handlePreviewField = (pageId, fieldId) => {
    console.log("Preview field", pageId, fieldId);
  };

  const handleSaveChanges = (pageId) => {
    const page = pages.find((p) => p.id === pageId);
    console.log("Save changes for", pageId, page?.fields);
  };

  const handleButtonTextChange = (pageId, text) => {
    setPages((prevPages) =>
      prevPages.map((page) =>
        page.id === pageId ? { ...page, buttonText: text } : page
      )
    );
  };

  const handleCreateAction = (pageId) => {
    console.log("Create action for", pageId);
  };

  const handlePreviewAction = (pageId) => {
    console.log("Preview action for", pageId);
  };

  const handleDeleteAction = (pageId) => {
    console.log("Delete action for", pageId);
  };

  const handleAddOption = (option) => {
    setSelectionOptions((prev) => [
      ...prev,
      { id: Date.now().toString(), text: option, type: "", price: "" },
    ]);
  };

  const handleDeleteOption = (optionId) => {
    setSelectionOptions((prev) =>
      prev.filter((option) => option.id !== optionId)
    );
  };

  const handleSave = () => {
    console.log("Saved successfully.");
  };
  const handleFileSave = () => {
    addField("d");
    console.log("Saved successfully.");
  };

  // Add Page Handler
  const handleAddPage = () => {
    if (!newPageType || !newPageName) return;
    const newPage = {
      id: Date.now().toString(),
      name: newPageName,
      type: newPageType,
      fields:
        newPageType === "Button"
          ? []
          : [
              {
                  id: Date.now().toString() + "-f",
                  name: newFieldName,
                  type: newFieldType,
                  price: newFieldPrice,
              },
            ],
      ...(newPageType === "Button"
        ? { buttonText: newFieldName || "+ Add", action: "" }
        : {}),
    };
    setPages((prev) => [...prev, newPage]);
    setShowAddPageModal(false);
    setNewPageType("");
    setNewPageName("");
    setNewFieldName("");
    setNewFieldType("");
    setNewFieldPrice("");
  };

  // Add Field Handler
  const handleAddField = () => {
    if (!fieldName || !fieldType) return;
    setPages((prevPages) =>
      prevPages.map((page) =>
        page.id === currentPageId
          ? {
              ...page,
              fields: [
                ...page.fields,
                { id: Date.now().toString(), name: fieldName, type: fieldType, price: price },
              ],
            }
          : page
      )
    );
    setShowAddFieldModal(false);
    setFieldName("");
    setFieldType("");
    setPrice("");
    setCurrentPageId("");
  };

  // Add Button Handler (CreateActionModal)
  const handleAddButton = () => {
    if (!modalName || !fieldName) return;
    const newButtonPage = {
      id: Date.now().toString(),
      name: modalName,
      type: "Button",
      fields: [],
      buttonText: fieldName,
      action: "",
      price: price,
    };
    setPages((prev) => [...prev, newButtonPage]);
    setShowCreateActionModal(false);
    setModalName("");
    setFieldName("");
    setFieldType("");
    setPrice("");
  };

  // Update Button Handler (ActionModal)
  const handleUpdateButton = () => {
    setPages((prevPages) =>
      prevPages.map((page) =>
        page.id === currentPageId
          ? { ...page, name: modalName, buttonText: fieldName, price: price }
          : page
      )
    );
    setShowActionModal(false);
    setModalName("");
    setFieldName("");
    setPrice("");
    setCurrentPageId("");
  };

  // Add Selection Handler (SelectionModal)
  const handleAddSelection = () => {
    if (!newOption.text || !newOption.type || !newOption.price) return;
    setPages((prevPages) =>
      prevPages.map((page) =>
        page.id === currentPageId
          ? {
              ...page,
              fields: [
                ...page.fields,
                { id: Date.now().toString(), name: newOption.text, type: newOption.type, price: newOption.price },
              ],
            }
          : page
      )
    );
    setNewOption({ text: "", type: "", price: "" });
  };

  // Open AddFieldModal for a page
  const openAddFieldModal = (pageId) => {
    setCurrentPageId(pageId);
    setShowAddFieldModal(true);
  };

  // Open CreateActionModal for a page
  const openCreateActionModal = (pageId) => {
    setCurrentPageId(pageId);
    setShowCreateActionModal(true);
  };

  // Open ActionModal for a page (edit button)
  const openActionModal = (pageId) => {
    const page = pages.find((p) => p.id === pageId);
    setCurrentPageId(pageId);
    setModalName(page?.name || "");
    setFieldName(page?.buttonText || "");
    setPrice(page?.price || "");
    setShowActionModal(true);
  };

  // Open SelectionModal for a page
  const openSelectionModal = (pageId) => {
    setCurrentPageId(pageId);
    setShowSelectionModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-8xl mx-auto space-y-6">
        {pages.map((page, index) => (
          <div
            key={page.id}
            className="bg-white rounded-lg p-6 shadow-sm border"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium">Page {index + 1}</h2>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">Page type:</span>
                <Select
                  value={page.type}
                  onValueChange={(val) =>
                    setPages((prev) =>
                      prev.map((p) =>
                        p.id === page.id ? { ...p, type: val } : p
                      )
                    )
                  }
                >
                  <SelectTrigger className="border rounded-md px-3 py-1 text-sm">
                    <SelectValue>{page.type}</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Input">Input</SelectItem>
                    <SelectItem value="Button">Button</SelectItem>
                    <SelectItem value="Selection">Selection</SelectItem>
                    <SelectItem value="Date">Date</SelectItem>
                    <SelectItem value="Time">Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <input
                type="text"
                value={page.name}
                onChange={(e) =>
                  setPages((prev) =>
                    prev.map((p) =>
                      p.id === page.id ? { ...p, name: e.target.value } : p
                    )
                  )
                }
                className="w-full px-4 py-3 border border-[#00000033] rounded-lg text-center"
              />
              <div className="w-12 h-12 border border-[#00000033] rounded-lg flex items-center justify-center">
                <ImageIcon className="w-5 h-5 text-gray-400" />
              </div>
              <button
                onClick={() => deletePage(page.id)}
                className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center hover:bg-red-200 transition-colors cursor-pointer"
              >
                <Trash2 className="w-5 h-5 text-red-500" />
              </button>
            </div>

            <FieldEditor
              page={page}
              addField={() => openAddFieldModal(page.id)}
              deleteField={deleteField}
              onUpdateField={updateField}
              onSave={handleSave}
            />

            <ButtonEditor
              page={page}
              onChangeButtonText={handleButtonTextChange}
              onCreateAction={() => openCreateActionModal(page.id)}
              onPreviewAction={() => openActionModal(page.id)}
              onDeleteAction={handleDeleteAction}
              onSaveChanges={handleSaveChanges}
            />

            <SelectionEditor
              page={page}
              onChangeFieldName={handleChangeFieldName}
              onPreviewField={() => openSelectionModal(page.id)}
              onDeleteField={deleteField}
              onSaveChanges={handleSaveChanges}
            />
          </div>
        ))}

        <button
          onClick={() => setShowAddPageModal(true)}
          className="w-full bg-[#6DA40A] text-white py-4 rounded-lg hover:bg-[#6ea40acb] transition-colors flex items-center justify-center gap-2 text-lg cursor-pointer"
        >
          <Plus className="w-5 h-5" />
          Add more page
        </button>
      </div>

      {/* Modals */}
      <AddPageModal
        show={showAddPageModal}
        onClose={() => setShowAddPageModal(false)}
        onSave={handleAddPage}
        newPageType={newPageType}
        setNewPageType={setNewPageType}
        newPageName={newPageName}
        setNewPageName={setNewPageName}
        newFieldName={newFieldName}
        setNewFieldName={setNewFieldName}
        newFieldType={newFieldType}
        setNewFieldType={setNewFieldType}
        newFieldPrice={newFieldPrice}
        setNewFieldPrice={setNewFieldPrice}
      />

      <AddFieldModal
        show={showAddFieldModal}
        onClose={() => setShowAddFieldModal(false)}
        fieldName={fieldName}
        setFieldName={setFieldName}
        fieldType={fieldType}
        setFieldType={setFieldType}
        price={price}
        setPrice={setPrice}
        onSave={handleAddField}
      />

      <CreateActionModal
        show={showCreateActionModal}
        onClose={() => setShowCreateActionModal(false)}
        modalName={modalName}
        setModalName={setModalName}
        fieldName={fieldName}
        setFieldName={setFieldName}
        fieldType={fieldType}
        setFieldType={setFieldType}
        price={price}
        setPrice={setPrice}
        onAdd={handleAddButton}
        onSave={handleAddButton}
      />

      <ActionModal
        show={showActionModal}
        onClose={() => setShowActionModal(false)}
        modalName={modalName}
        setModalName={setModalName}
        fieldName={fieldName}
        fieldType={fieldType}
        price={price}
        onEdit={handleUpdateButton}
      />

      <SelectionModal
        show={showSelectionModal}
        onClose={() => setShowSelectionModal(false)}
        selectionOptions={pages.find((p) => p.id === currentPageId)?.fields || []}
        onAddOption={handleAddSelection}
        onDeleteOption={(optionId) => {
          setPages((prevPages) => prevPages.map((page) =>
            page.id === currentPageId
              ? { ...page, fields: page.fields.filter((f) => f.id !== optionId) }
              : page
          ));
        }}
        onSave={() => setShowSelectionModal(false)}
        newOption={newOption}
        setNewOption={setNewOption}
      />
    </div>
  );
}
