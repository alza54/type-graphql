export declare namespace DMMF {
  interface Document {
    datamodel: Datamodel;
    schema: Schema;
    mappings: Mapping[];
  }
  interface Enum {
    name: string;
    values: string[];
    dbName?: string | null;
    documentation?: string;
  }
  interface Datamodel {
    models: Model[];
    enums: Enum[];
  }
  interface Model {
    name: string;
    isEmbedded: boolean;
    dbName: string | null;
    fields: Field[];
    documentation?: string;
    idFields: string[];
    uniqueFields: string[][];
    // [key: string]: any;
    // additional props
    typeName: string;
  }
  type FieldKind = "scalar" | "object" | "enum";
  interface Field {
    kind: FieldKind;
    name: string;
    isRequired: boolean;
    isList: boolean;
    isUnique: boolean;
    isId: boolean;
    type: string;
    dbNames: string[] | null;
    isGenerated: boolean;
    relationToFields?: any[];
    relationOnDelete?: string;
    relationName?: string;
    documentation?: string;
    default?: FieldDefault | string | boolean;
    // [key: string]: any;
    // additional props
    typeFieldAlias?: string;
  }
  interface FieldDefault {
    name: string;
    returnType: string;
    args: any[];
  }
  interface Schema {
    rootQueryType?: string;
    rootMutationType?: string;
    inputTypes: InputType[];
    outputTypes: OutputType[];
    enums: Enum[];
  }
  interface Query {
    name: string;
    args: SchemaArg[];
    output: QueryOutput;
  }
  interface QueryOutput {
    name: string;
    isRequired: boolean;
    isList: boolean;
  }
  type ArgType = string | InputType | Enum;
  interface SchemaArgInputType {
    isRequired: boolean;
    isNullable: boolean;
    isList: boolean;
    // type: ArgType;
    argType: ArgType;
    kind: FieldKind;
    // additional props
    type: string;
  }
  interface SchemaArg {
    name: string;
    // inputType: SchemaArgInputType[];
    selectedInputType: SchemaArgInputType;
    isRelationFilter?: boolean;
    nullEqualsUndefined?: boolean;
    comment?: string;
  }
  interface OutputType {
    name: string;
    fields: SchemaField[];
    isEmbedded?: boolean;
  }
  interface SchemaField {
    name: string;
    outputType: {
      type: string;
      isList: boolean;
      isRequired: boolean;
      kind: FieldKind;
    };
    args: SchemaArg[];
  }
  interface InputType {
    name: string;
    isWhereType?: boolean;
    isOrderType?: boolean;
    atLeastOne?: boolean;
    atMostOne?: boolean;
    fields: SchemaArg[];
    // additional props
    typeName: string;
  }
  interface Mapping {
    model: string;
    plural: string;
    // findOne?: string | null;
    // findMany?: string | null;
    // create?: string | null;
    // update?: string | null;
    // updateMany?: string | null;
    // upsert?: string | null;
    // delete?: string | null;
    // deleteMany?: string | null;
    // aggregate?: string | null;

    // additional props
    actions: Action[];
  }
  // additional type
  interface Action {
    name: string;
    fieldName: string;
    kind: ModelAction;
    operation: "Query" | "Mutation";
  }
  enum ModelAction {
    findOne = "findOne",
    findMany = "findMany",
    create = "create",
    update = "update",
    updateMany = "updateMany",
    upsert = "upsert",
    delete = "delete",
    deleteMany = "deleteMany",
    aggregate = "aggregate",
  }
}
export interface BaseField {
  name: string;
  type: string | DMMF.Enum | DMMF.OutputType | DMMF.SchemaArg;
  isList: boolean;
  isRequired: boolean;
}