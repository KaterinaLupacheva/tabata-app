package io.ramonak.service.services;

public final class UserAlreadyExistsException extends RuntimeException {

    private static final long serialVersionUID = -8816591709149398445L;

    public UserAlreadyExistsException(final String message) {
        super(message);
    }
}
