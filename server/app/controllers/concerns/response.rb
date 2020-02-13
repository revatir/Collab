module Response
  def create_response(object, object2, status = :ok)
    render json: object, json: object2, status: status
  end
  def json_response(object, status = :ok)
    render json: object, status: status
  end
end