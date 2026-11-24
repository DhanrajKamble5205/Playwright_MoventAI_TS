enum OrdStatus {
    Pendding = "PENDDING",
    Shipped = "SHIPPED",
    Delivered = "DELIVERED",
    Cancelled = "CANCEL"
}

const Status1:OrdStatus = OrdStatus.Shipped;
console.log(Status1)