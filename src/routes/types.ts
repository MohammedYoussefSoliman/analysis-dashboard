import React from "react";

export interface RouterType {
  element: React.ComponentType<any>;
  path: string;
}

export type Opportunity = {
  name: string;
};
