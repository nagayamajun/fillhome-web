
export type Route = {
  id: keyof RoutingType;
  path: string; 
}

type RoutingWithParams<T> = {
  buildRoute: (params: T) => Route;
  pathName: string;
}

type RoutingWithNoParams = {
  buildRoute: () => Route;
  pathName: string;
}

export type RoutingType = {
  //user
  //room
  room: RoutingWithParams<{ roomId: number }>;
  roomWithRentalHouse: RoutingWithParams<{ id: string, rental_house_id: string }>;
  //rentalHouse
  rentalHouses: RoutingWithNoParams;
  rentalHousesByHouseName: RoutingWithParams<{ houseName: string }>;

  //admin
  //owner
  ownerSignUp: RoutingWithNoParams;
  ownerSignIn: RoutingWithNoParams;
  //rentalHouse
  adminRentalHouses: RoutingWithNoParams;
  addRentalHouse: RoutingWithNoParams;
  //room
  adminRoomsBelongToHouse: RoutingWithParams<{ houseId: string }>;
  adminAddRoomBelongToHouse: RoutingWithParams<{ houseId: number }>;

  //reserved
  reservedRoom: RoutingWithParams<{ mansion_room_id: string }>;
}