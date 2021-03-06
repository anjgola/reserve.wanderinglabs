class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :premium, :premium_until, :sms_limit, :sms_count
  has_many :notification_methods do
    @object.notification_methods.where(active: true)
  end
end
