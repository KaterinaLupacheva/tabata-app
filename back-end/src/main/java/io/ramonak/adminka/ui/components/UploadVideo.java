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
                File targetFile = new File("C:/Testfolder/folder/" + event.getFileName());
                FileUtils.copyInputStreamToFile(is, targetFile);
                String objectKey = targetFile.getName();
                s3client.putObject(new PutObjectRequest("tabata-video", "video/" + objectKey, targetFile)
                        .withCannedAcl(CannedAccessControlList.PublicRead));
                String url = s3client.getUrl("tabata-video", "video/" + objectKey).toString();
                link.setValue(url);
                targetFile.delete();
            } catch (AmazonServiceException | IOException ex) {
                Notification.show("ERROR " + ex.getMessage());
            } finally {
                if(s3client !=null) {
                    s3client.shutdown();
                }
            }
        });
    }
}
