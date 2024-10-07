import {
  availableFeaturesStatuses,
  featureStatuses,
  Ifeature,
  InewProjectForm,
} from "@/types/InewProject";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { FaTrash } from "react-icons/fa";

export default function NewProjectFeatureList({ data }: { data: Ifeature[] }) {
  const form = useFormContext<InewProjectForm>();
  const [state, setstate] = useState(Object.groupBy(data, ({ status }) => status));

  useEffect(() => {
    setstate(Object.groupBy(data, ({ status }) => status));
  }, [data]);

  function DeleteFeature(title: string) {
    form.setValue("payload.features",form.getValues("payload.features").filter((e) => e.name != title));
  }

  return (
    <section className="flex w-full justify-between gap-2">
      {
      Object.keys(availableFeaturesStatuses).map((status, i) => {
        return (
          <div className="w-full bg-secondary" key={status + i}>
            <div className=" gap-2 bg-white border-gray-600 border-2 rounded-md p-2 flex items-center">
              <div
                className={clsx(
                  "w-3 h-3 rounded-full shadow-xl",
                  availableFeaturesStatuses[status as featureStatuses]
                )}
              ></div>
              <b className="font-semibold capitalize">{status}</b>
            </div>
            <div className="mt-2 flex flex-col gap-2 p-2">
              {state[status as featureStatuses]?.map(({ name }, index) => {
                return (
                  <div
                    className=" gap-2  bg-white border rounded-md p-2 flex items-center font-semibold justify-between"
                    key={name}
                  >
                    <div className="flex gap-2">
                      <p>{index + 1} .</p>
                      {name}
                    </div>
                    <div className="flex gap-1">
                      <button
                        className="text-destructive hover:scale-95 transition-transform"
                        onClick={() => DeleteFeature(name)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })

      }
    </section>
  );
}
