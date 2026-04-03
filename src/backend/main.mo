import Text "mo:core/Text";
import Int "mo:core/Int";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";

actor {
  type AppointmentRequest = {
    name : Text;
    email : Text;
    phone : Text;
    preferredDateTime : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module AppointmentRequest {
    public func compare(a : AppointmentRequest, b : AppointmentRequest) : Order.Order {
      Int.compare(b.timestamp, a.timestamp); // Newest first
    };
  };

  let appointmentRequests = Map.empty<Text, AppointmentRequest>();

  public shared ({ caller }) func addAppointmentRequest(name : Text, email : Text, phone : Text, preferredDateTime : Text, message : Text) : async () {
    if (name.size() == 0 or email.size() == 0 or phone.size() == 0) {
      Runtime.trap("Incomplete appointment data");
    };

    let id = name.concat(email).concat(phone).concat(preferredDateTime);
    if (appointmentRequests.containsKey(id)) { Runtime.trap("Appointment already exists") };

    let appointment : AppointmentRequest = {
      name;
      email;
      phone;
      preferredDateTime;
      message;
      timestamp = Time.now();
    };
    appointmentRequests.add(id, appointment);
  };

  public query ({ caller }) func getAllAppointmentRequests() : async [AppointmentRequest] {
    appointmentRequests.values().toArray().sort();
  };
};
