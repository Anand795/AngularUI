import {
    Injectable
}
from '@angular/core';

@Injectable({ providedIn: 'root' }) export class SharedService {

    constructor() {}

    Addressid: number;
    
    selectedAddress: number;

    // getter setter for upadating address
    setAddressId(data) {
        this.Addressid = data;
    }
    getAddressId() {
        return this.Addressid;
    }

    // getter setter for selecting address to place order
    setSelectedAddress(data) {
        this.selectedAddress = data;
    }
    getSelectedAddress(){
      return this.selectedAddress;
    }
}
