package io.ramonak.adminka.ui.components;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.*;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.upload.Upload;
import com.vaadin.flow.component.upload.receivers.MultiFileMemoryBuffer;
import elemental.json.Json;
import org.apache.commons.io.FileUtils;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;

public class UploadVideo extends Div {

    private final MultiFileMemoryBuffer buffer;
    private final Upload upload;

    private final String accessKey;
    private final String secretKey;

    public UploadVideo(String accessKey, String secretKey) {
        this.accessKey = accessKey;
        this.secretKey = secretKey;
        buffer = new MultiFileMemoryBuffer();
        upload = new Upload(buffer);
        add(upload);
    }

    private AmazonS3 configureAwsAccount() {
        BasicAWSCredentials credentials = new BasicAWSCredentials(accessKey,
                secretKey);
        return AmazonS3ClientBuilder.standard()
                .withCredentials(new AWSStaticCredentialsProvider(credentials))
                .withRegion(Regions.EU_CENTRAL_1)
                .build();
    }

    public void uploadVideo(TextField link) {
        AmazonS3 s3client = configureAwsAccount();
        upload.setMaxFiles(1);
        upload.addSucceededListener(event-> {
            try {
                InputStream is = buffer.getInputStream(event.getFileName());
                File tempFile = new File("C:/Testfolder/folder/" + event.getFileName());
                FileUtils.copyInputStreamToFile(is, tempFile);
                String objectKey = tempFile.getName();
                s3client.putObject(new PutObjectRequest("tabata-video", "video/" + objectKey, tempFile)
                        .withCannedAcl(CannedAccessControlList.PublicRead));
                String url = s3client.getUrl("tabata-video", "video/" + objectKey).toString();
                link.setValue(url);
                if(tempFile.exists()) {
                    tempFile.delete();
                }
            } catch (AmazonServiceException | IOException ex) {
                Notification.show("ERROR " + ex.getMessage());
            }
        });
    }

    public void clearFileName() {
        upload.getElement().setPropertyJson("files", Json.createArray());
    }
}
