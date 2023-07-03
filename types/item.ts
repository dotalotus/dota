import { Items } from "../mod.ts";

type raw = typeof Items[number];
export type ItemID = raw["id"];
export type ItemName = raw["name"];
export type ItemShortName = raw["shortName"];
export type ItemDisplayName = raw["displayName"];

interface ItemLanguage {
  itemId?: number;
  gameVersionId?: number;
  languageId?: number;
  displayName?: string;
  description?: string[];
  attributes?: string;
  notes?: string;
  lore?: string;
  loreArray?: string[];
  descriptionArray?: string[];
  notesArray?: string[];
  attributesArray?: string[];
}

interface ItemStat {
  itemId: number;
  gameVersionId: number;
  behavior?: number;
  unitTargetType?: number;
  unitTargetTeam?: number;
  unitTargetFlags?: number;
  fightRecapLevel?: number;
  castRange?: string;
  castRangeArray?: number[];
  castPoint?: string;
  castPointArray?: number[];
  cooldown?: string;
  cooldownArray?: number[];
  manaCost?: string;
  manaCostArray?: number[];
  channelTime?: string;
  channelTimeArray?: number[];
  sharedCooldown?: string;
  cost?: number;
  shopTags?: string;
  aliases?: string;
  quality?: string;
  isSellable?: boolean;
  isDroppable?: boolean;
  isPurchasable?: boolean;
  isSecretShop?: boolean;
  isSideShop?: boolean;
  isStackable?: boolean;
  isPermanent?: boolean;
  isHideCharges?: boolean;
  isRequiresCharges?: boolean;
  isDisplayCharges?: boolean;
  isSupport?: boolean;
  isAlertable?: boolean;
  isTempestDoubleClonable?: boolean;
  stockMax?: number;
  initialCharges?: number;
  initialStock?: number;
  stockTime?: number;
  initialStockTime?: number;
  isRecipe?: boolean;
  needsComponents?: boolean;
  upgradeItem?: number;
  upgradeRecipe?: number;
  itemResult?: number;
  neutralItemTier?: number;
  neutralItemDropTime?: number;
}

interface ItemComponent {
  itemId: number;
  itemIndex: number;
  gameVersionId: number;
  componentId: number;
}

interface ItemAttribute {
  itemId: number;
  gameVersionId: number;
  name?: string;
  value?: string;
}

export interface Item {
  id: number;
  name: string;
  displayName?: string;
  shortName?: string;
  isSupportFullItem?: boolean;
  language?: ItemLanguage;
  stat?: ItemStat;
  components?: ItemComponent[];
  attributes?: ItemAttribute[];
  image?: string;
  nullable?: true;
  isInNeuralNetwork?: boolean;
  isFullItemHeroPurchaseItem?: boolean;
  readOnly?: true;
  languages?: ItemLanguage[];
}
